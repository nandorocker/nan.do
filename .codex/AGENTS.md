# Agent Instructions

This document provides context and guidelines for AI coding assistants working on this project.

## Package Management

- **Use `bun`** for all package management and script execution
- Install dependencies: `bun i`
- Add packages: `bun add <package>`
- Run scripts: `bun run <script>`
- **Do not use** npm, yarn, or pnpm

## Development Environment

- A development server is always running in the background using `bun dev`
- For testing changes:
  - Build: `bun build`
  - Lint: `bun run lint`
- Do not attempt to start the dev server unless explicitly requested

## Project Context

This is an Astro-based personal portfolio website with:
- Astro for static site generation
- Tailwind CSS for styling
- TypeScript support
- Case study pages for project work
- Custom components for UI elements

## File Organization

- `/src/pages/` - Page routes
- `/src/components/` - Reusable Astro components
- `/src/layouts/` - Layout templates
- `/public/` - Static assets
- `/src/assets/` - Processed assets
