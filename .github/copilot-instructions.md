# Project Instructions

## Package Management

Use **bun** exclusively for all package management and script execution. Do not use npm, yarn, or pnpm.

- Install dependencies: `bun i`
- Add packages: `bun add <package>`
- Remove packages: `bun remove <package>`
- Run scripts: `bun run <script>`

## Development Workflow

A development server is always running in the background using `bun dev`. Do not attempt to start it unless explicitly requested.

For testing and validation:
- Build: `bun build`
- Lint: `bun run lint`

## Project Stack

This is an Astro-based personal portfolio website:
- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Features**: Case study pages, custom components

## File Structure

- `/src/pages/` - Page routes (Astro, Markdown)
- `/src/components/` - Reusable Astro components
- `/src/layouts/` - Layout templates (BaseLayout, CaseStudyLayout)
- `/public/` - Static assets (images, JavaScript)
- `/src/assets/` - Processed assets

## Coding Conventions

- Use Astro components (`.astro`) for UI elements
- Leverage Astro's component props and slots pattern
- Keep components focused and composable
- Use Tailwind utility classes for styling