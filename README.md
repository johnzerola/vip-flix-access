# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/2ae8c212-9c61-42a0-8f6e-11a435969ed0

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2ae8c212-9c61-42a0-8f6e-11a435969ed0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Environment variables

Copy `.env.example` to `.env` and set `VITE_ADMIN_EMAIL` and
`VITE_ADMIN_PASSWORD` with your Supabase admin user credentials. These values
are used by the admin panel to sign in with `supabase.auth.signInWithPassword`.
You must authenticate with these credentials before the analytics and
configuration data can be loaded.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2ae8c212-9c61-42a0-8f6e-11a435969ed0) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Creating an Admin User in Supabase

The database restricts reading analytics tables to administrators. An admin is
any user listed in the `admin_users` table or whose UUID matches the fixed ID
defined in the migration (`00000000-0000-0000-0000-000000000000`).

After signing up a user via the Supabase dashboard, run the following SQL to
grant them admin access:

```sql
insert into public.admin_users (user_id) values ('REPLACE_WITH_USER_ID');
```

Run this in the SQL editor, replacing `REPLACE_WITH_USER_ID` with the user's
actual ID. Once inserted, the user will be able to read from `visitas` and
`cliques` when authenticated.
