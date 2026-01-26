# Design System Guidelines

Based on the [nan.do](https://nan.do) portfolio website, this document outlines the design principles, visual identity, and component patterns used to ensure consistency across the site.

## 1. Brand Voice & Communication

**Identity**: Nando Rossi is a seasoned freelance product designer (20+ years) focusing on "soulful software" that empowers humans.

**Voice Characteristics**:
- **Empathetic & Ethical**: Focuses on accessible and thoughtful design.
- **Experienced yet Approachable**: Uses "I" (first person), humble but authoritative.
- **Professional with Character**: Balanced use of technical terms (IA, UX Audits) and playful elements (emojis, game design references).
- **Concise & Action-Oriented**: Short, punchy sentences in hero areas; descriptive but focused blocks in service/work sections.

**Examples**:
- **Aligned**: "I make soulful software that people love to use.", "Turning ideas into beloved products.", "👋 Hi, I'm nando rossi."
- **Misaligned**: "Leveraging synergized design paradigms to disrupt markets.", "Our company provides comprehensive UX solutions."

---

## 2. Color System

The site uses a "Neobrutalist-lite" palette—vibrant but grounded by a warm cream background and dark obsidian text.

| Role | Color Name | Hex Value | Usage Context |
| :--- | :--- | :--- | :--- |
| **Primary Text** | `obsidian-700` | `#262628` | Main text, headings, borders, primary buttons. |
| **Main BG** | `cream-DEFAULT` | `#fff6ee` | Default page background, card backgrounds. |
| **Accent 1** | `lavender-DEFAULT` | `#c6c2f2` | Intro hero background, nav headers, hover states. |
| **Accent 2** | `lime-DEFAULT` | `#d6dc82` | Work section background, testimonial accents. |
| **Accent 3** | `cherry-DEFAULT` | `#d86072` | About section background, highlights. |
| **Shadows** | `Black` | `rgb(0 0 0 / 1)` | Solid "flat" shadows for cards and windows. |

---

## 3. Typography

**Font Stack**: `Work Sans`, sans-serif.

**Scale**:
- **H1**: `text-5xl` (mobile) to `text-7xl` (desktop), `font-bold` or `font-black`. Used for hero headlines.
- **H2**: `text-4xl` to `text-6xl`, `font-bold`. Section headers.
- **H3**: `text-3xl` to `text-5xl`, `font-bold`. Secondary section headers.
- **H4**: `text-2xl` to `text-4xl`, `font-bold`. Sub-headers or intro lines.
- **H5/H6**: `text-lg` to `text-3xl`, `font-bold`. Component-level titles (cards, services).
- **Body**: `text-base`, `leading-relaxed`. Main content.
- **Micro**: `text-sm`, `uppercase`, `font-bold`. Categories, small labels.

---

## 4. Spacing System

**Vertical Rhythm**:
- Sections typically use `margins-y`: `pt-36` (mobile) to `pt-48` (2xl screens).
- Hero padding: `pb-12` to `pb-24`.
- Vertical gap between items in grids: `gap-12` to `gap-16`.

**Horizontal Constraints**:
- **Wide**: `xl:max-w-screen-2xl` (approx 1536px).
- **Medium**: `lg:max-w-screen-xl` (1280px).
- **Narrow**: `lg:max-w-screen-lg` (1024px).
- **X-Margins**: `px-5` on mobile, `px-8` to `px-20` on desktop.

---

## 5. Layout Principles

- **Fluid Grids**: Heavy use of CSS Grid (`grid-cols-1` to `grid-cols-3/12`).
- **Standard Breakpoints**: Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px).
- **Mobile First**: Layouts are defined for mobile and expanded for desktop (e.g., `flex-col` to `flex-row`).
- **Containment**: Most content is wrapped in `contain-wide` or `contain-medium` utility classes.

---

## 6. Component Library

### Buttons
- **Primary**: Solid `obsidian` bg, `cream` text, `rounded-full`.
  - *Hover*: `obsidian-600` bg, adds `shadow-md-flat-r`.
- **Outline**: `border-2`, `rounded-md`, `border-obsidian`.
  - *Hover*: `bg-lavender-200`.
- **Contact**: Large `rounded-xl`, `border-6`, `shadow-cream`.
- **Link**: Underlined, bold, `text-2xl`. Decoration color changes on hover.

### Windows (`window-md`, `window-sm`)
- **Style**: `rounded-xl` or `rounded-md`, `shadow-2xl-flat-r` (solid black offset), `overflow-hidden`.
- **Usage**: Images, featured blocks, brand grids.

### Work Cards
- **Structure**: Vertical stack (mobile) or complex grid (desktop).
- **Features**: 
  - Image with `shadow-2xl-flat-r`.
  - Bold uppercase category label.
  - H3/H5 title.
  - Descriptive paragraph.
  - Large underlined CTA.

### Navigation
- **Header**: Fixed or sticky with `bg-lavender` on internal pages.
- **Indicators**: `current` state uses `font-black` and an underline.
- **Mobile**: Hamburger menu toggling a full-width drawer.

---

## 7. Interaction Patterns

**Scroll & Transitions**:
- **Background Transition**: The `#background` div changes color as users scroll through sections (triggered via `data-bg-class` on sections).
- **AOS Animations**: Elements fade or slide up on entrance (`fade-up`, `fade-down`, `fade-right`).
- **Smooth Scroll**: Enabled via `scroll-smooth` on the HTML tag.

**Hover States**:
- **Card Rotation**: `odd:hover:rotate-[1.5deg]`, `even:hover:-rotate-[1.5deg]` for a playful "physical" feel.
- **Button Shadows**: Buttons gain a solid flat shadow on hover.
- **Color Shifts**: Links transition color (usually to `lavender`) over `300ms`.

---

## 8. Design Principles

1.  **Neobrutalist Clarity**: Use bold borders and solid shadows to define hierarchy and add character.
2.  **Generous Breathing Room**: Embrace large vertical margins and spacing to prevent mental fatigue.
3.  **Human-Centered Details**: Incorporate organic rotations and soft background color shifts to make the digital experience feel "soulful."
4.  **Content Priority**: Visual weight is driven by typography (bold headings) and high-contrast color blocks.
5.  **Accessibility First**: High contrast ratios (dark text on light backgrounds) and clear focus states.
