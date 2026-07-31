# Supabase Setup

1. Create a Supabase project.
2. Open the SQL editor and run `supabase/schema.sql`.
3. Create an auth user for the admin from Authentication > Users.
4. Copy that user's UUID and run:

```sql
insert into public.admin_users (user_id)
values ('PASTE_ADMIN_USER_UUID_HERE');
```

5. Copy `.env.example` to `.env` and fill in:

```bash
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_MEDIA_BUCKET=elevateher-media
```

6. Restart the Vite dev server after editing `.env`.

The public site reads only `published` records. The admin can create drafts, publish them, upload images to the `elevateher-media` bucket, and manage all content.
