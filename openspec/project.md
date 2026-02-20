# Project Context

## Purpose
This repository powers Roberto Delgado's personal website and writing portfolio. It serves as a fast, low-maintenance, static-first site for publishing essays, showcasing consulting/project work, and providing a personal profile with social/contact discovery.

## Tech Stack
- HTML5 for all pages and content
- CSS (single shared stylesheet at `public/assets/site.css`)
- Vanilla JavaScript (`public/assets/site.js`) with Web Components for shared header/footer
- Node.js 24.x for local development server (`scripts/serve.js`)
- Vercel static hosting (`vercel.json` sets `outputDirectory` to `public` with no build step)

## Project Conventions

### Code Style
- Keep the project framework-free and dependency-light.
- Prefer semantic HTML and accessible markup (`lang`, descriptive `alt`, ARIA labels where needed).
- Use lowercase, hyphenated CSS class names (e.g., `post-card`, `site-shell`).
- Keep styles centralized in `public/assets/site.css`; avoid page-specific inline styling except small animation delay variables already in use.
- Keep JavaScript minimal and browser-native; avoid introducing bundlers/transpilers unless explicitly required.

### Architecture Patterns
- Static-first architecture: each route maps to an HTML file under `public/`.
- Shared UI chrome (header/footer) is implemented once in custom elements (`site-header`, `site-footer`) and reused across pages.
- Asset organization:
  - `public/assets/` for shared CSS/JS
  - `public/posts/` for writing pages
  - `public/work/` for portfolio pages
  - `public/images/` and `public/fonts/` for media assets
- Local dev uses a lightweight Node HTTP server that serves files directly from `public/`.

### Testing Strategy
- No formal automated test suite is currently configured.
- Validation is done through manual browser QA:
  - Verify local rendering via `npm run dev`
  - Check navigation links and static routes
  - Check responsive behavior on mobile/desktop
  - Confirm metadata/social tags and RSS link integrity when content changes

### Git Workflow
- Default branch is `master`.
- Current history uses short, direct commit messages (e.g., `updated title`, `added work index`).
- For consistency going forward:
  - Keep commits scoped to one logical change
  - Use imperative, descriptive commit titles
  - Avoid mixing content edits and infrastructure changes in one commit when possible

## Domain Context
- The site has two primary content domains:
  - Editorial writing under `/posts/`
  - Professional/project case studies under `/work/`
- Brand voice is personal but clear and concise.
- Typography and visual identity are intentional (Authentic Sans family, warm paper background, subtle gradients/shadows).

## Important Constraints
- Keep deployment static and simple; no backend runtime is required for production hosting.
- Preserve fast page loads and minimal operational overhead.
- Do not introduce heavy toolchains or frameworks without explicit approval.
- Maintain compatibility with existing static URL structure (especially `/posts/*` and `/work/*` links).

## External Dependencies
- Vercel for hosting and delivery of static assets.
- Google Tag Manager (`GTM-PH7X4H4`) embedded on pages for analytics tracking.
- Social platforms linked in footer (GitHub, X, Instagram).
