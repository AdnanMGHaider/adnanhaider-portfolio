# Adnan Haider – Personal Portfolio

A modern, responsive developer-portfolio built with **Next.js&nbsp;15**, **React&nbsp;19**, and **Tailwind&nbsp;CSS&nbsp;4**.

## Stack

* Next.js App Router (v15)
* React 19 & Server Components
* Tailwind CSS 4 & CSS variables for theming
* Lucide-React & React-Icons for iconography
* ESLint + Prettier for code quality

## Local development

```bash
# install deps
npm install

# start dev server
npm run dev
```
Visit <http://localhost:3000>.

## Useful scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Run local dev server |
| `npm run lint` | Lint & format code |
| `npm run build` | Create production build |
| `npm run start` | Run production build locally |

## Continuous Integration

A GitHub Actions workflow (`.github/workflows/ci.yml`) automatically runs **lint** and **build** on every push / pull-request to `main`.

## Deployment

Deploy effortlessly to Vercel or Netlify:

1. Connect the repo.
2. Framework preset: **Next.js** (build command & output auto-detected).
3. Ensure environment variable `NEXT_PUBLIC_SITE_URL` (optional) matches your custom domain.

The site is fully static with dynamic routing handled by Next.js, so previews & rollbacks are instant.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
