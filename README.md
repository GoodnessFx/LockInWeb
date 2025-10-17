# LockIn – 97‑Day Gamified Commitment Growth App (Landing + Blog)

LockIn is a 97‑day gamified commitment growth app designed to help you lock in your discipline, focus daily, and compound progress. This repository contains the public landing experience and blog, built with React + TypeScript and Vite, styled with Tailwind utilities and custom CSS tokens, and animated with Framer Motion.

## What the App Does (Product Overview)

- **97‑Day Program**: Users commit to 97 days of consistent action. The philosophy is simple: “rent is due everyday.”
- **Gamification**: Progress, streaks, and milestones keep motivation high without overwhelming the user.
- **Focus First**: Quick actions and session framing reduce friction and make it easy to start.
- **Education**: The blog teaches the science behind focus, consistency, and community accountability.

This repo implements the marketing site for the app, not the app itself.

## Project Structure

- `src/App.tsx`: App entry and routes (`/` and `/blog`).
- `src/main.tsx`: React bootstrap and global providers (e.g., `sonner` toaster).
- `src/index.css` and `src/styles/globals.css`: Design tokens, CSS variables, and theme layers (includes dark theme).
- `src/components/*`: Landing sections (`Navbar`, `Hero`, `About`, `Features`, `Preview`, `CTA`, `Contact`, `Footer`).
- `src/components/ui/*`: Reusable UI primitives (buttons, cards, dialogs, etc.).
- `src/components/Blog.tsx`: Home page blog preview grid.
- `src/pages/BlogPage.tsx`: Full blog listing page with animated cards and CTA.
- `vite.config.ts`: Vite configuration.

## UX and Visuals

- **Responsive by default**: Layouts are composed with fluid containers and CSS grid/flex utilities. Tested across mobile, tablets, and desktops.
- **Professional Hero**: Clean, black background hero with animated quotes; designed to showcase the brand while keeping focus on the CTA.
- **Accessible UI**: Semantic HTML, readable contrast, focusable CTAs, and motion that respects content.
- **Dark Theme Ready**: Global CSS variables power theming; `.dark` root class switches to a deep, accessible palette.

## Key Landing + Blog Features

- **Hero with rotating quotes**: Motivational copy fades in/out.
- **Features and Preview**: Communicate value and show product glimpses.
- **CTA blocks**: Clear iOS/Android download intents (links are placeholders you can update).
- **Blog**: Professional grid with icons, dates, read time, and strong typography.

## Getting Started

### Requirements

- Node.js 18+
- npm

### Install, Develop, Build

```bash
npm install
npm run dev
npm run build
npm run preview
```

The build output is written to `build/` and is ready for any static host.

## Configuration Notes

- Update store links in `src/components/Hero.tsx` CTA anchors.
- To use a photography background instead of solid black in the hero, set a CSS `background-image` on the hero container or inject an inline style with an Unsplash URL. Keep strong contrast for readability.

## Tech Stack

- React 18, TypeScript, Vite
- Framer Motion (animations)
- Tailwind‑style utility classes with custom design tokens
- Radix UI primitives (menu, dialog, etc.) wrapped in `src/components/ui/*`

## Production Readiness

- Dependency tree installs cleanly; production build passes (`npm run build`).
- Assets are optimized by Vite; output is suitable for CDNs and static hosting.
- Lighthouse‑friendly: fast first paint, minimal JS on landing, optimized CSS chunk.

## Contributing

1. Create a feature branch from `main`.
2. Keep edits focused and small. Match code style and naming conventions.
3. Ensure `npm run build` passes before opening a PR.

## License

Copyright © LockIn. All rights reserved. Licensed under the MIT License.

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Vite** - Fast build tool
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

## License

MIT License - feel free to use this template for your own projects.
  