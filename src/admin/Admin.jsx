// import { useEffect, useMemo, useState } from "react";
// import { Navigate, NavLink, Route, Routes } from "react-router-dom";
// import {
//   FiBookOpen,
//   FiCalendar,
//   FiEdit3,
//   FiEye,
//   FiGrid,
//   FiImage,
//   FiLogOut,
//   FiPlus,
//   FiSave,
//   FiTrash2,
//   FiUploadCloud,
// } from "react-icons/fi";
// import { isSupabaseConfigured, supabase } from "../lib/supabaseClient";
// import {
//   createAdminContent,
//   deleteAdminContent,
//   listAdminContent,
//   subscribeToTable,
//   updateAdminContent,
//   uploadMedia,
// } from "../services/contentService";
// import "./Admin.css";

// const RESOURCE_CONFIG = {
//   courses: {
//     label: "Courses",
//     singular: "Course",
//     route: "courses",
//     table: "courses",
//     icon: FiBookOpen,
//     description: "Manage the course cards and links shown on the public courses page.",
//     empty: "No courses have been added yet.",
//     fields: [
//       { name: "title", label: "Title", type: "text", required: true },
//       { name: "category", label: "Category", type: "text", required: true },
//       { name: "path", label: "Website path", type: "text", required: true, placeholder: "/full-stack-development" },
//       { name: "image_url", label: "Main course image", type: "image" },
//       { name: "image2", label: "Project sample images", type: "gallery" },
//       { name: "sort_order", label: "Display order", type: "number" },
//       { name: "status", label: "Status", type: "status", defaultValue: "published" },
//     ],
//     getTitle: (item) => item.title,
//     getMeta: (item) => `${item.category || "No category"} - ${item.path || "/"}`,
//     getImage: (item) => item.image_url,
//   },
//   events: {
//     label: "Blog / Events",
//     singular: "Event",
//     route: "events",
//     table: "events",
//     icon: FiCalendar,
//     description: "Publish event stories, news posts, dates, cover images, and event galleries.",
//     empty: "No events have been added yet.",
//     fields: [
//       { name: "title", label: "Title", type: "text", required: true },
//       { name: "tag", label: "Tag", type: "text", required: true },
//       { name: "event_day", label: "Day", type: "text", placeholder: "14" },
//       { name: "event_month", label: "Month", type: "text", placeholder: "Mar" },
//       { name: "event_year", label: "Year", type: "text", placeholder: "2026" },
//       { name: "image_url", label: "Main event image", type: "image" },
//       { name: "other_event_pics", label: "Other event pictures", type: "gallery" },
//       { name: "description", label: "Description", type: "textarea", required: true },
//       { name: "status", label: "Status", type: "status", defaultValue: "published" },
//     ],
//     getTitle: (item) => item.title,
//     getMeta: (item) => `${item.tag || "Event"} - ${item.event_month || ""} ${item.event_day || ""} ${item.event_year || ""}`,
//     getImage: (item) => item.image_url,
//   },
//   startups: {
//     label: "Portfolio",
//     singular: "Startup",
//     route: "portfolio",
//     table: "startups",
//     icon: FiImage,
//     description: "Manage startups and portfolio items displayed across the ElevateHer site.",
//     empty: "No portfolio items have been added yet.",
//     fields: [
//       { name: "name", label: "Startup name", type: "text", required: true },
//       { name: "slug", label: "Slug", type: "text", required: true, placeholder: "shepall" },
//       { name: "img_url", label: "Logo / main image", type: "image" },
//       { name: "description", label: "Description", type: "textarea", required: true },
//       { name: "description2", label: "Second description", type: "textarea" },
//       { name: "images", label: "Gallery images", type: "gallery" },
//       { name: "status", label: "Status", type: "status", defaultValue: "published" },
//     ],
//     getTitle: (item) => item.name,
//     getMeta: (item) => `/${item.slug || ""}`,
//     getImage: (item) => item.img_url,
//   },
// };

// const emptyFormFor = (resourceKey) => {
//   const config = RESOURCE_CONFIG[resourceKey];

//   return config.fields.reduce((form, field) => {
//     if (field.type === "gallery") {
//       form[field.name] = [];
//     } else {
//       form[field.name] = field.defaultValue ?? "";
//     }

//     return form;
//   }, {});
// };

// const normalizeGallery = (value) => {
//   if (!Array.isArray(value)) return [];

//   return value.map((item) => {
//     if (typeof item === "string") {
//       return { image: item, alt: "" };
//     }

//     return {
//       image: item?.image || item?.url || item?.src || "",
//       alt: item?.alt || "",
//     };
//   });
// };

// const formFromItem = (resourceKey, item) => {
//   const form = emptyFormFor(resourceKey);
//   const config = RESOURCE_CONFIG[resourceKey];

//   config.fields.forEach((field) => {
//     if (field.type === "gallery") {
//       form[field.name] = normalizeGallery(item[field.name]);
//       return;
//     }

//     form[field.name] = item[field.name] ?? field.defaultValue ?? "";
//   });

//   return form;
// };

// const cleanPayload = (resourceKey, form) => {
//   const config = RESOURCE_CONFIG[resourceKey];
//   const payload = {};

//   config.fields.forEach((field) => {
//     const value = form[field.name];

//     if (field.type === "gallery") {
//       payload[field.name] = normalizeGallery(value).filter((item) => item.image.trim());
//       return;
//     }

//     if (field.name === "sort_order") {
//       payload[field.name] = value === "" ? null : Number(value);
//       return;
//     }

//     payload[field.name] = typeof value === "string" ? value.trim() : value;
//   });

//   if (resourceKey === "courses" && payload.path && !payload.path.startsWith("/")) {
//     payload.path = `/${payload.path}`;
//   }

//   if (resourceKey === "startups" && payload.slug) {
//     payload.slug = payload.slug.toLowerCase().replace(/\s+/g, "-");
//   }

//   return payload;
// };

// const formatUpdatedAt = (value) => {
//   if (!value) return "Not saved yet";

//   return new Intl.DateTimeFormat("en", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   }).format(new Date(value));
// };

// function AdminSetupScreen() {
//   return (
//     <main className="admin-auth-page">
//       <section className="admin-auth-card">
//         <span className="admin-eyebrow">Supabase setup required</span>
//         <h1>Connect the admin site to Supabase</h1>
//         <p>
//           Add your Supabase project URL and anon key to `.env`, then restart the
//           dev server. The setup SQL is available in `supabase/schema.sql`.
//         </p>
//       </section>
//     </main>
//   );
// }

// function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError("");
//     setLoading(true);

//     const { error: signInError } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (signInError) {
//       setError(signInError.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <main className="admin-auth-page">
//       <form className="admin-auth-card" onSubmit={handleSubmit}>
//         <span className="admin-eyebrow">ElevateHer Admin</span>
//         <h1>Welcome back</h1>
//         <p>Sign in with the Supabase admin user you created for content management.</p>

//         <label>
//           Email
//           <input
//             autoComplete="email"
//             onChange={(event) => setEmail(event.target.value)}
//             required
//             type="email"
//             value={email}
//           />
//         </label>

//         <label>
//           Password
//           <input
//             autoComplete="current-password"
//             onChange={(event) => setPassword(event.target.value)}
//             required
//             type="password"
//             value={password}
//           />
//         </label>

//         {error && <div className="admin-alert error">{error}</div>}

//         <button className="admin-primary-button" disabled={loading} type="submit">
//           <FiSave aria-hidden="true" />
//           {loading ? "Signing in..." : "Sign in"}
//         </button>
//       </form>
//     </main>
//   );
// }

// function AdminOverview() {
//   const [stats, setStats] = useState({
//     courses: 0,
//     events: 0,
//     startups: 0,
//   });
//   const [error, setError] = useState("");

//   useEffect(() => {
//     let mounted = true;

//     const loadStats = async () => {
//       try {
//         const [courses, events, startups] = await Promise.all([
//           listAdminContent("courses"),
//           listAdminContent("events"),
//           listAdminContent("startups"),
//         ]);

//         if (mounted) {
//           setStats({
//             courses: courses.length,
//             events: events.length,
//             startups: startups.length,
//           });
//         }
//       } catch (statsError) {
//         if (mounted) setError(statsError.message);
//       }
//     };

//     loadStats();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const cards = [
//     { label: "Courses", value: stats.courses, icon: FiBookOpen },
//     { label: "Events", value: stats.events, icon: FiCalendar },
//     { label: "Portfolio", value: stats.startups, icon: FiImage },
//   ];

//   return (
//     <section className="admin-panel">
//       <div className="admin-page-heading">
//         <div>
//           <span className="admin-eyebrow">Overview</span>
//           <h1>Content dashboard</h1>
//         </div>
//         <p>Manage every public course, event post, and portfolio item from one place.</p>
//       </div>

//       {error && <div className="admin-alert error">{error}</div>}

//       <div className="admin-stat-grid">
//         {cards.map((card) => {
//           const Icon = card.icon;

//           return (
//             <article className="admin-stat-card" key={card.label}>
//               <Icon aria-hidden="true" />
//               <div>
//                 <strong>{card.value}</strong>
//                 <span>{card.label}</span>
//               </div>
//             </article>
//           );
//         })}
//       </div>

//       <div className="admin-dashboard-note">
//         <h2>Publishing flow</h2>
//         <p>
//           Create or edit content, upload images, then keep the item as a draft or
//           publish it. Published records are fetched by the public website and
//           refreshed through Supabase realtime updates.
//         </p>
//       </div>
//     </section>
//   );
// }

// function ResourceManager({ resourceKey }) {
//   const config = RESOURCE_CONFIG[resourceKey];
//   const [items, setItems] = useState([]);
//   const [selectedId, setSelectedId] = useState(null);
//   const [form, setForm] = useState(() => emptyFormFor(resourceKey));
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [uploadingField, setUploadingField] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const selectedItem = useMemo(
//     () => items.find((item) => item.id === selectedId),
//     [items, selectedId]
//   );

//   useEffect(() => {
//     setSelectedId(null);
//     setForm(emptyFormFor(resourceKey));
//     setMessage("");
//     setError("");
//   }, [resourceKey]);

//   useEffect(() => {
//     let mounted = true;

//     const loadItems = async () => {
//       try {
//         setLoading(true);
//         const content = await listAdminContent(resourceKey);
//         if (mounted) {
//           setItems(content);
//           setError("");
//         }
//       } catch (loadError) {
//         if (mounted) setError(loadError.message);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     loadItems();
//     const unsubscribe = subscribeToTable(config.table, loadItems);

//     return () => {
//       mounted = false;
//       unsubscribe();
//     };
//   }, [config.table, resourceKey]);

//   const resetForm = () => {
//     setSelectedId(null);
//     setForm(emptyFormFor(resourceKey));
//     setMessage("");
//     setError("");
//   };

//   const handleSelect = (item) => {
//     setSelectedId(item.id);
//     setForm(formFromItem(resourceKey, item));
//     setMessage("");
//     setError("");
//   };

//   const updateField = (fieldName, value) => {
//     setForm((current) => ({ ...current, [fieldName]: value }));
//   };

//   const updateGalleryItem = (fieldName, index, key, value) => {
//     setForm((current) => {
//       const gallery = normalizeGallery(current[fieldName]);
//       gallery[index] = { ...gallery[index], [key]: value };
//       return { ...current, [fieldName]: gallery };
//     });
//   };

//   const removeGalleryItem = (fieldName, index) => {
//     setForm((current) => {
//       const gallery = normalizeGallery(current[fieldName]).filter((_, itemIndex) => itemIndex !== index);
//       return { ...current, [fieldName]: gallery };
//     });
//   };

//   const addGalleryItem = (fieldName) => {
//     setForm((current) => ({
//       ...current,
//       [fieldName]: [...normalizeGallery(current[fieldName]), { image: "", alt: "" }],
//     }));
//   };

//   const handleImageUpload = async (field, file) => {
//     if (!file) return;

//     setUploadingField(field.name);
//     setError("");

//     try {
//       const url = await uploadMedia(file, `${resourceKey}/${field.name}`);
//       updateField(field.name, url);
//       setMessage("Image uploaded successfully.");
//     } catch (uploadError) {
//       setError(uploadError.message);
//     } finally {
//       setUploadingField("");
//     }
//   };

//   const handleGalleryUpload = async (field, files) => {
//     const fileList = Array.from(files || []);
//     if (!fileList.length) return;

//     setUploadingField(field.name);
//     setError("");

//     try {
//       const uploaded = [];

//       for (const file of fileList) {
//         const url = await uploadMedia(file, `${resourceKey}/${field.name}`);
//         uploaded.push({ image: url, alt: "" });
//       }

//       setForm((current) => ({
//         ...current,
//         [field.name]: [...normalizeGallery(current[field.name]), ...uploaded],
//       }));
//       setMessage("Gallery images uploaded successfully.");
//     } catch (uploadError) {
//       setError(uploadError.message);
//     } finally {
//       setUploadingField("");
//     }
//   };

//   const validate = () => {
//     const missing = config.fields
//       .filter((field) => field.required)
//       .filter((field) => !String(form[field.name] || "").trim())
//       .map((field) => field.label);

//     if (missing.length) {
//       return `Please complete: ${missing.join(", ")}.`;
//     }

//     return "";
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMessage("");
//     setError("");

//     const validationError = validate();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setSaving(true);

//     try {
//       const payload = cleanPayload(resourceKey, form);

//       if (selectedId) {
//         await updateAdminContent(resourceKey, selectedId, payload);
//         setMessage(`${config.singular} updated successfully.`);
//       } else {
//         const created = await createAdminContent(resourceKey, payload);
//         setSelectedId(created.id);
//         setMessage(`${config.singular} created successfully.`);
//       }

//       const freshItems = await listAdminContent(resourceKey);
//       setItems(freshItems);
//     } catch (saveError) {
//       setError(saveError.message);
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleDelete = async (item) => {
//     const confirmed = window.confirm(`Delete "${config.getTitle(item)}"? This cannot be undone.`);
//     if (!confirmed) return;

//     setError("");
//     setMessage("");

//     try {
//       await deleteAdminContent(resourceKey, item.id);
//       const freshItems = await listAdminContent(resourceKey);
//       setItems(freshItems);

//       if (selectedId === item.id) resetForm();
//       setMessage(`${config.singular} deleted successfully.`);
//     } catch (deleteError) {
//       setError(deleteError.message);
//     }
//   };

//   return (
//     <section className="admin-resource-page">
//       <div className="admin-page-heading">
//         <div>
//           <span className="admin-eyebrow">{config.singular} manager</span>
//           <h1>{config.label}</h1>
//         </div>
//         <p>{config.description}</p>
//       </div>

//       <div className="admin-resource-grid">
//         <aside className="admin-list-panel">
//           <div className="admin-list-header">
//             <div>
//               <span>{items.length} total</span>
//               <h2>{config.label}</h2>
//             </div>
//             <button className="admin-icon-button" onClick={resetForm} title={`Add ${config.singular}`} type="button">
//               <FiPlus aria-hidden="true" />
//             </button>
//           </div>

//           {loading && <div className="admin-muted-state">Loading content...</div>}
//           {!loading && !items.length && <div className="admin-muted-state">{config.empty}</div>}

//           <div className="admin-item-list">
//             {items.map((item) => {
//               const image = config.getImage(item);
//               const active = item.id === selectedId;

//               return (
//                 <article className={`admin-item ${active ? "active" : ""}`} key={item.id}>
//                   <button className="admin-item-main" onClick={() => handleSelect(item)} type="button">
//                     <div className="admin-item-image">
//                       {image ? <img alt="" src={image} /> : <FiImage aria-hidden="true" />}
//                     </div>
//                     <div>
//                       <h3>{config.getTitle(item) || "Untitled"}</h3>
//                       <p>{config.getMeta(item)}</p>
//                       <span className={`admin-status ${item.status || "published"}`}>
//                         {item.status || "published"}
//                       </span>
//                     </div>
//                   </button>

//                   <div className="admin-item-actions">
//                     <button onClick={() => handleSelect(item)} title="Edit" type="button">
//                       <FiEdit3 aria-hidden="true" />
//                     </button>
//                     <button onClick={() => handleDelete(item)} title="Delete" type="button">
//                       <FiTrash2 aria-hidden="true" />
//                     </button>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </aside>

//         <form className="admin-editor-panel" onSubmit={handleSubmit}>
//           <div className="admin-editor-header">
//             <div>
//               <span className="admin-eyebrow">{selectedItem ? "Editing" : "Creating"}</span>
//               <h2>{selectedItem ? config.getTitle(selectedItem) : `New ${config.singular}`}</h2>
//               {selectedItem && <p>Last updated {formatUpdatedAt(selectedItem.updated_at)}</p>}
//             </div>
//             <button className="admin-secondary-button" onClick={resetForm} type="button">
//               <FiPlus aria-hidden="true" />
//               New
//             </button>
//           </div>

//           {message && <div className="admin-alert success">{message}</div>}
//           {error && <div className="admin-alert error">{error}</div>}

//           <div className="admin-form-grid">
//             {config.fields.map((field) => (
//               <AdminField
//                 field={field}
//                 key={field.name}
//                 onAddGalleryItem={addGalleryItem}
//                 onGalleryUpload={handleGalleryUpload}
//                 onImageUpload={handleImageUpload}
//                 onRemoveGalleryItem={removeGalleryItem}
//                 onUpdateField={updateField}
//                 onUpdateGalleryItem={updateGalleryItem}
//                 uploadingField={uploadingField}
//                 value={form[field.name]}
//               />
//             ))}
//           </div>

//           <div className="admin-form-actions">
//             <button className="admin-primary-button" disabled={saving} type="submit">
//               <FiSave aria-hidden="true" />
//               {saving ? "Saving..." : selectedItem ? "Save changes" : `Create ${config.singular}`}
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// function AdminField({
//   field,
//   onAddGalleryItem,
//   onGalleryUpload,
//   onImageUpload,
//   onRemoveGalleryItem,
//   onUpdateField,
//   onUpdateGalleryItem,
//   uploadingField,
//   value,
// }) {
//   if (field.type === "textarea") {
//     return (
//       <label className="admin-field admin-field-wide">
//         {field.label}
//         <textarea
//           onChange={(event) => onUpdateField(field.name, event.target.value)}
//           placeholder={field.placeholder}
//           required={field.required}
//           rows={7}
//           value={value || ""}
//         />
//       </label>
//     );
//   }

//   if (field.type === "status") {
//     return (
//       <label className="admin-field">
//         {field.label}
//         <select
//           onChange={(event) => onUpdateField(field.name, event.target.value)}
//           value={value || "published"}
//         >
//           <option value="published">Published</option>
//           <option value="draft">Draft</option>
//         </select>
//       </label>
//     );
//   }

//   if (field.type === "image") {
//     return (
//       <div className="admin-field admin-field-wide">
//         <span>{field.label}</span>
//         <div className="admin-image-row">
//           <input
//             onChange={(event) => onUpdateField(field.name, event.target.value)}
//             placeholder="Paste image URL or upload below"
//             type="url"
//             value={value || ""}
//           />
//           <label className="admin-upload-button">
//             <FiUploadCloud aria-hidden="true" />
//             {uploadingField === field.name ? "Uploading..." : "Upload"}
//             <input
//               accept="image/*"
//               hidden
//               onChange={(event) => {
//                 onImageUpload(field, event.target.files?.[0]);
//                 event.target.value = "";
//               }}
//               type="file"
//             />
//           </label>
//         </div>
//         {value && (
//           <div className="admin-preview">
//             <img alt="" src={value} />
//             <a href={value} rel="noreferrer" target="_blank">
//               <FiEye aria-hidden="true" />
//               Preview
//             </a>
//           </div>
//         )}
//       </div>
//     );
//   }

//   if (field.type === "gallery") {
//     const gallery = normalizeGallery(value);

//     return (
//       <div className="admin-field admin-field-wide">
//         <div className="admin-gallery-header">
//           <span>{field.label}</span>
//           <button onClick={() => onAddGalleryItem(field.name)} type="button">
//             <FiPlus aria-hidden="true" />
//             Add URL
//           </button>
//         </div>

//         <label className="admin-upload-strip">
//           <FiUploadCloud aria-hidden="true" />
//           {uploadingField === field.name ? "Uploading gallery..." : "Upload multiple images"}
//           <input
//             accept="image/*"
//             hidden
//             multiple
//             onChange={(event) => {
//               onGalleryUpload(field, event.target.files);
//               event.target.value = "";
//             }}
//             type="file"
//           />
//         </label>

//         <div className="admin-gallery-list">
//           {gallery.map((item, index) => (
//             <div className="admin-gallery-item" key={`${field.name}-${index}`}>
//               <div className="admin-gallery-thumb">
//                 {item.image ? <img alt="" src={item.image} /> : <FiImage aria-hidden="true" />}
//               </div>
//               <div className="admin-gallery-inputs">
//                 <input
//                   onChange={(event) => onUpdateGalleryItem(field.name, index, "image", event.target.value)}
//                   placeholder="Image URL"
//                   type="url"
//                   value={item.image}
//                 />
//                 <input
//                   onChange={(event) => onUpdateGalleryItem(field.name, index, "alt", event.target.value)}
//                   placeholder="Alt text"
//                   type="text"
//                   value={item.alt}
//                 />
//               </div>
//               <button
//                 className="admin-icon-button danger"
//                 onClick={() => onRemoveGalleryItem(field.name, index)}
//                 title="Remove image"
//                 type="button"
//               >
//                 <FiTrash2 aria-hidden="true" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <label className="admin-field">
//       {field.label}
//       <input
//         onChange={(event) => onUpdateField(field.name, event.target.value)}
//         placeholder={field.placeholder}
//         required={field.required}
//         type={field.type === "number" ? "number" : "text"}
//         value={value || ""}
//       />
//     </label>
//   );
// }

// function AdminShell({ session }) {
//   const navItems = [
//     { to: "/admin", label: "Overview", icon: FiGrid, end: true },
//     { to: "/admin/courses", label: "Courses", icon: FiBookOpen },
//     { to: "/admin/events", label: "Events", icon: FiCalendar },
//     { to: "/admin/portfolio", label: "Portfolio", icon: FiImage },
//   ];

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//   };

//   return (
//     <main className="admin-app">
//       <aside className="admin-sidebar">
//         <div className="admin-brand">
//           <span>EH</span>
//           <div>
//             <strong>ElevateHer</strong>
//             <small>Admin Studio</small>
//           </div>
//         </div>

//         <nav className="admin-nav">
//           {navItems.map((item) => {
//             const Icon = item.icon;

//             return (
//               <NavLink
//                 className={({ isActive }) => `admin-nav-link ${isActive ? "active" : ""}`}
//                 end={item.end}
//                 key={item.to}
//                 to={item.to}
//               >
//                 <Icon aria-hidden="true" />
//                 {item.label}
//               </NavLink>
//             );
//           })}
//         </nav>

//         <div className="admin-user-card">
//           <small>Signed in as</small>
//           <strong>{session.user.email}</strong>
//           <button onClick={handleSignOut} type="button">
//             <FiLogOut aria-hidden="true" />
//             Sign out
//           </button>
//         </div>
//       </aside>

//       <div className="admin-content">
//         <Routes>
//           <Route element={<AdminOverview />} index />
//           <Route element={<ResourceManager resourceKey="courses" />} path="courses" />
//           <Route element={<ResourceManager resourceKey="events" />} path="events" />
//           <Route element={<ResourceManager resourceKey="startups" />} path="portfolio" />
//           <Route element={<Navigate replace to="/admin" />} path="*" />
//         </Routes>
//       </div>
//     </main>
//   );
// }

// export default function AdminApp() {
//   const [session, setSession] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!isSupabaseConfigured) {
//       setLoading(false);
//       return undefined;
//     }

//     let mounted = true;

//     supabase.auth.getSession().then(({ data }) => {
//       if (mounted) {
//         setSession(data.session);
//         setLoading(false);
//       }
//     });

//     const { data: authListener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
//       setSession(nextSession);
//     });

//     return () => {
//       mounted = false;
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   if (!isSupabaseConfigured) return <AdminSetupScreen />;
//   if (loading) return <div className="admin-loading">Loading admin...</div>;
//   if (!session) return <AdminLogin />;

//   return <AdminShell session={session} />;
// }
