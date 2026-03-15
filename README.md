LockIn Web

Overview
LockIn is a focus and habit app for students and teams. This repository contains the marketing site built with React, Vite, Tailwind and shadcn UI in TypeScript.

Key Features
1. Interactive hero with globe visualization that mirrors the provided design reference. Left side contains the product headline and subtext, right side renders the animated globe.
2. Motivational line marquee at the bottom of the hero.
3. Waitlist email capture that posts to the existing pipeline and shows an inline success message.
4. Private beta application via Google Forms. A single button opens the official form in a new tab.
5. Social follow block, newsletter subscribe and perks grid.

Tech Stack
1. React 18 with Vite
2. TypeScript
3. Tailwind CSS v4
4. shadcn UI components under src/components/ui
5. framer motion for light animations

Project Structure
src/components/ui holds all reusable UI building blocks and utilities.
src/components contains page sections such as Hero, WaitlistBeta and Footer.
src/pages contains optional demo pages.

Setup
1. Install dependencies
   npm install
2. Start development server
   npm run dev
   The app runs at http://localhost:3000
3. Build for production
   npm run build
   npm run preview

Environment Variables
Create a file named .env.local at the project root. Add the following keys if you already have Google endpoints.

VITE_GOOGLE_APPS_SCRIPT_URL=your_apps_script_web_app_url
VITE_GOOGLE_BETA_FORM_URL=your_public_google_form_url
VITE_GOOGLE_RESPONSE_URL=optional_public_google_response_page_url

Notes
1. When VITE_GOOGLE_APPS_SCRIPT_URL is not set, form submissions simulate success so local development never blocks.
2. Set VITE_GOOGLE_BETA_FORM_URL to the exact public Google Form link so the beta button opens your form.
3. If VITE_GOOGLE_RESPONSE_URL is set, a button appears to open the official Google response page in a new tab.

Editing Content
Hero copy lives in src/components/Hero.tsx.
Waitlist, beta and newsletter copy lives in src/components/WaitlistBeta.tsx.

Design Choices
The hero is implemented as a two column card with a soft glow and a rotating dot globe. The layout is mobile first and scales from a single column to a side by side presentation on larger screens. Motivational lines scroll across the bottom of the hero for ambient motion without distracting from the call to action.

Accessibility
Form labels are present and inputs are keyboard accessible. Buttons use descriptive aria labels where navigation opens a new tab.

Troubleshooting
If npm run build fails due to a local Node path issue, use npm run dev to run a Vite dev server, or reinstall Node and run npm install again.
If styles look incorrect ensure src/index.css is loaded and Tailwind is active.

Ownership
Default form destinations use goodnessiyamah1@gmail.com. Update src/components/WaitlistBeta.tsx if you need a different recipient.
