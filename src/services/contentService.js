import { MEDIA_BUCKET, isSupabaseConfigured, supabase } from "../lib/supabaseClient";

export const CONTENT_TABLES = {
  courses: "courses",
  events: "events",
  startups: "startups",
};

const ensureSupabase = () => {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured. Add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values.");
  }
};

const toGalleryObjects = (items) => {
  if (!Array.isArray(items)) return [];

  return items
    .map((item) => {
      if (typeof item === "string") {
        return { image: item, alt: "" };
      }

      return {
        image: item?.image || item?.url || item?.src || "",
        alt: item?.alt || "",
      };
    })
    .filter((item) => item.image);
};

const toImageUrls = (items) => toGalleryObjects(items).map((item) => item.image);

const normalizeCourse = (course) => ({
  id: course.id,
  title: course.title || "",
  category: course.category || "",
  path: course.path || "/",
  image: course.image_url || "",
  image2: toGalleryObjects(course.image2),
  status: course.status || "published",
});

const normalizeEvent = (event) => ({
  id: event.id,
  tag: event.tag || "",
  image: event.image_url || "",
  date: event.event_day || "",
  month: event.event_month || "",
  year: event.event_year || "",
  title: event.title || "",
  otherEventPics: toGalleryObjects(event.other_event_pics),
  description: event.description || "",
  status: event.status || "published",
});

const normalizeStartup = (startup) => ({
  id: startup.id,
  slug: startup.slug || "",
  name: startup.name || "",
  img: startup.img_url || "",
  description: startup.description || "",
  description2: startup.description2 || "",
  images: toImageUrls(startup.images),
  status: startup.status || "published",
});

export const fetchCourses = async () => {
  if (!isSupabaseConfigured) return null;

  const { data, error } = await supabase
    .from(CONTENT_TABLES.courses)
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data.map(normalizeCourse);
};

export const fetchEvents = async () => {
  if (!isSupabaseConfigured) return null;

  const { data, error } = await supabase
    .from(CONTENT_TABLES.events)
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data.map(normalizeEvent);
};

export const fetchStartups = async () => {
  if (!isSupabaseConfigured) return null;

  const { data, error } = await supabase
    .from(CONTENT_TABLES.startups)
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data.map(normalizeStartup);
};

export const fetchStartupBySlug = async (slug) => {
  if (!isSupabaseConfigured || !slug) return null;

  const { data, error } = await supabase
    .from(CONTENT_TABLES.startups)
    .select("*")
    .eq("slug", slug.toLowerCase())
    .eq("status", "published")
    .maybeSingle();

  if (error) throw error;
  return data ? normalizeStartup(data) : null;
};

export const listAdminContent = async (resource) => {
  ensureSupabase();

  const table = CONTENT_TABLES[resource];
  if (!table) throw new Error(`Unknown content resource: ${resource}`);

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const createAdminContent = async (resource, payload) => {
  ensureSupabase();

  const table = CONTENT_TABLES[resource];
  if (!table) throw new Error(`Unknown content resource: ${resource}`);

  const { data, error } = await supabase
    .from(table)
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateAdminContent = async (resource, id, payload) => {
  ensureSupabase();

  const table = CONTENT_TABLES[resource];
  if (!table) throw new Error(`Unknown content resource: ${resource}`);

  const { data, error } = await supabase
    .from(table)
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteAdminContent = async (resource, id) => {
  ensureSupabase();

  const table = CONTENT_TABLES[resource];
  if (!table) throw new Error(`Unknown content resource: ${resource}`);

  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
};

export const uploadMedia = async (file, folder = "uploads") => {
  ensureSupabase();

  const safeName = file.name
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const token =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const filePath = `${folder}/${token}-${safeName}`;

  const { error } = await supabase.storage
    .from(MEDIA_BUCKET)
    .upload(filePath, file, {
      cacheControl: "31536000",
      upsert: false,
    });

  if (error) throw error;

  const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
};

export const subscribeToTable = (table, onChange) => {
  if (!isSupabaseConfigured || !supabase) return () => {};

  const channel = supabase
    .channel(`elevateher-${table}-${Date.now()}`)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table },
      onChange
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};
