# Savio Secondary School Website

Modern public website for Savio Secondary School, built with Next.js, TypeScript, Tailwind CSS and Sanity.

## Free-first architecture

- **Next.js + TypeScript** — public website
- **Tailwind CSS** — styling
- **Sanity** — CMS, structured content and images
- **Vercel** — deployment

Supabase/Postgres and a custom admin dashboard are intentionally **not** included in the first version. Sanity already provides the content database and editor interface, which keeps the project smaller and easier to operate on free plans.

The public website has no login. Content editing happens in Sanity Studio using the Sanity account(s) authorised on the project.

## Local setup

1. Install Node.js 20+.
2. Copy `.env.example` to `.env.local`.
3. Put the Sanity Project ID and dataset from the Sanity project into `.env.local`.
4. Install dependencies with `npm install`.
5. Run `npm run dev`.

## Sanity schemas

The repository includes schemas for:

- School settings
- News posts
- Events
- Staff members
- Gallery items

Deploy the schema through the Sanity CLI from the repository when the Sanity CLI workflow is connected to the project.

## Important content note

The old `sacs` site was used as a starting reference. Its current content contains several inconsistencies and placeholder-style claims, so this rebuild deliberately avoids treating every old sentence as verified school fact. Official school information should be entered/confirmed in Sanity before launch.
