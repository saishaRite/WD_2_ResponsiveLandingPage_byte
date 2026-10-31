# NexaFlow — Responsive Parallax Landing Page

A responsive SaaS-style landing page built with semantic HTML, CSS, and vanilla JavaScript.

## Assignment requirements covered

- Responsive layout for desktop, tablet, and mobile.
- Hero section, product/service feature cards, and clear calls to action.
- Matrix-inspired parallax background with multiple layers moving at different speeds.
- Interactive hover states and dashboard tilt.
- Semantic HTML structure and metadata (`title`, `description`, theme color, Open Graph metadata).
- Reduced-motion support for visitors who prefer less animation.

## Files

- `index.html` — page structure and metadata.
- `style.css` — visual design, responsive breakpoints, and parallax background styling.
- `script.js` — requestAnimationFrame-based parallax movement and dynamic copyright year.

## Run locally

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same directory.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

No build tools, frameworks, or external libraries are required.

## Parallax implementation

Elements with a `data-speed` attribute move vertically according to the page's scroll position. Each element has a different speed, including negative speeds, so the background and foreground do not move together. The JavaScript uses `requestAnimationFrame` to keep scroll updates efficient and the CSS `translate` property so the effect does not overwrite other transforms.

## Before submission

- Push the project to a public GitHub repository.
- Add your live deployment URL (for example, GitHub Pages or Vercel) below.
- Capture desktop, tablet, and mobile screenshots and add them to the repository.

## Live demo

Add your deployed URL here: `https://your-live-demo-url`
