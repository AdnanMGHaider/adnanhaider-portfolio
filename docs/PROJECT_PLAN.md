# AdnanHaider.net – Next.js 15 Portfolio Re‑build

**Goal:** Re‑implement the existing React + Vite + TypeScript one‑page portfolio in **Next.js 15 (App Router) with plain JavaScript**, Tailwind CSS, Framer‑motion, and Headless UI. The finished site will be deployed on Vercel and mapped to **[www.adnanhaider.net](http://www.adnanhaider.net)** as a living résumé for recruiters.

---

## 0 • Tech‑Stack & Conventions

| Area       | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | Next.js 15 (app router, JavaScript)                 |
| Styling    | Tailwind CSS & PostCSS                              |
| Animations | Framer‑motion                                       |
| UI bits    | **Headless UI** (accessible primitives)             |
| Tooling    | ESLint, Prettier, Husky (pre‑push lint)             |
| Hosting    | Vercel (auto‑deploy on `main`)                      |
| Repo       | Git/GitHub, semantic commits (`M{n}-P{n}: message`) |

> **Docs folder**
> All meta‑files live in **`docs/`** at repo root:
>
> - `PROJECT_PLAN.md` ← *this file* (living roadmap – edit when scope changes)
> - `CHANGELOG.md`   (high‑level, append after each milestone)
> - `CURRENT_TASK.md` (1‑3 lines: what you’re doing **right now** – paste into a fresh ChatGPT tab if needed)

---

## 1 • Milestones & Parts

| #   | Milestone                   | Parts (P‑steps)                                                                                                                                             | Outcome                                                            |
| --- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 1   | **Scaffold & Git**          | **P1** Env check  **P2** `create-next-app@latest`  **P3** Tailwind init  **P4** ESLint/Prettier                                                             | Clean Next.js 15 app running locally, first commit & push          |
| 2   | **Global Layout & Theme**   | **P1** RootLayout `<html>` + metadata  **P2** ThemeProvider + dark/light toggle  **P3** Nav shell (Headless UI `Disclosure`)  **P4** Global Container class | Skeleton with global styles                                        |
| 3   | **Hero Section**            | **P1** Mark‑up incl. `<Image>` portrait (optimized via `next/image`)  **P2** Tailwind styling  **P3** Framer entry anim  **P4** Responsive tweaks           | Pixel‑perfect, image‑optimised Hero                                |
| 4   | **About Section**           | same 4‑part structure                                                                                                                                       |                                                                    |
| 5   | **Projects Gallery**        | **P1** `/data/projects.js`  **P2** Card grid  **P3** Modal/lightbox (Headless UI `Dialog`)  **P4** Responsive                                               | Interactive projects grid                                          |
| 6   | **Stats / Counters**        | …                                                                                                                                                           |                                                                    |
| 7   | **Tech Stack**              | …                                                                                                                                                           |                                                                    |
| 8   | **Contact & Footer**        | …                                                                                                                                                           |                                                                    |
| 9   | **Accessibility & QA pass** | **P1** Keyboard nav  **P2** ARIA  **P3** Lighthouse ≥ 90                                                                                                    | Polished, a11y‑friendly build                                      |
| 10  | **Deploy & Domain**         | **P1** Vercel connect  **P2** Custom domain  **P3** Final smoke test                                                                                        | Live at [https://www.adnanhaider.net](https://www.adnanhaider.net) |
| 11  | **Post‑launch tweaks**      | Ongoing                                                                                                                                                     | Bug fixes & enhancements                                           |

_Each milestone ends with:_ ✅ `npm run build` passes • responsive checks done • tag created `v{milestone}.0`.

---

## 2 • Workflow Rules — Plain English

1. **Commit early, commit often**   `git add . && git commit -m "M1-P2: init tailwind" && git push`.
2. **Branches for experiments**   `git switch -c feat/scroll-spy` → work → `git push -u origin feat/scroll-spy` → PR/Merge.
3. **Tags mark safe checkpoints**   After Milestone 3 finishes on `main`:
      `git tag v3.0 && git push --tags`  → later you can `git checkout v3.0` to see that snapshot.
4. **CURRENT_TASK.md**   Before asking ChatGPT, write 1‑2 lines describing what you’re doing. Paste it (plus any tiny code snippet you’re stuck on) into the chat.
5. **CHANGELOG.md**   Append a bullet after every finished Part or bug‑fix so future you sees the narrative.

> **Why bother?** Small commits + tags make it trivial to roll back and avoid the “Pennywise trap” of mystery regressions.

---

## 3 • Revert / Recovery Quick Guide

| Scenario                       | Command                                                  |
| ------------------------------ | -------------------------------------------------------- |
| Undo last commit but keep code | `git reset --soft HEAD~1`                                |
| Fully undo last commit         | `git revert HEAD`                                        |
| Jump back to a Milestone tag   | `git checkout v2.0`                                      |
| Recover a deleted branch       | `git reflog` → find SHA → `git checkout -b rescue <SHA>` |

Rule of thumb: **`main` must always build** → run `npm ci && next build` before pushing.

---

## 4 • Responsiveness Strategy

Tailwind’s mobile‑first classes (`md:`, `lg:`) baked in **from the first line of CSS**. Each Part’s P4 step confirms breakpoints on real devices using DevTools.

---

## 5 • Switching to a Fresh ChatGPT Window

1. Copy **docs/CURRENT_TASK.md** contents.
2. Copy the **Milestones table** above (or just this file’s top section).
3. Add any _minimal_ code snippet you’re debugging (≤ 150 lines ideally).
4. Start the new chat with: “Context for AdnanHaider.net portfolio build: …” and paste the snippets.
5. Continue work; update docs as you progress.

---

## 6 • Backlog

\* … (add nice‑to‑haves here)

---

Happy building!  — Project Plan v1.1 (Next.js 15 & Headless UI)
