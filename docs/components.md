# Component Library Documentation

This directory contains reusable Astro components designed to maintain consistency and reduce code duplication across the site.

## Core Components

### Section.astro

A flexible wrapper component for page sections with consistent spacing, background colors, and container widths.

**Props:**
- `id?: string` - Section ID for anchor links
- `bgClass?: string` - Background color class (e.g., "bg-lavender", "bg-cherry")
- `ariaLabel?: string` - ARIA label for accessibility
- `ariaLabelledBy?: string` - ID of element that labels this section
- `class?: string` - Additional CSS classes
- `container?: "wide" | "medium" | "narrow" | "none"` - Container width (default: "wide")
- `marginX?: "wide" | "medium" | "narrow" | "none"` - Horizontal margins (default: "wide")
- `marginY?: boolean` - Apply vertical margins (default: false)
- `element?: "section" | "article" | "div"` - HTML element to render (default: "section")

**Example:**
```astro
<Section id="about" bgClass="bg-cherry" ariaLabelledBy="about-heading" marginY={true}>
  <h2 id="about-heading">About Me</h2>
  <p>Content here...</p>
</Section>
```

---

### Heading.astro

Smart heading component with optional AOS animations and flexible styling.

**Props:**
- `level: 1 | 2 | 3 | 4 | 5 | 6` - Heading level (required)
- `text?: string` - Heading text (alternative to using slot)
- `id?: string` - Element ID
- `class?: string` - Additional CSS classes
- `style?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"` - Override visual style (e.g., h2 element styled as h1)
- `aos?: boolean` - Enable AOS animations (default: false)
- `aosEffect?: string` - AOS animation type (default: "fade")
- `aosDuration?: number` - Animation duration in ms (default: 1200)
- `aosDelay?: number` - Animation delay in ms (default: 300)
- `aosOffset?: number` - Offset from viewport (default: 100)
- `aosEasing?: string` - Animation easing (default: "ease-out")
- `dataHeading?: string` - Custom data attribute for headings

**Examples:**
```astro
<!-- Basic heading -->
<Heading level={2} id="services">Services</Heading>

<!-- Heading with AOS animation -->
<Heading level={2} aos={true} aosDuration={1200}>
  Selected Works
</Heading>

<!-- h2 element styled as h1 -->
<Heading level={2} style="h1" class="mb-8">
  Large Visual Heading
</Heading>

<!-- Using slot instead of text prop -->
<Heading level={1}>
  Welcome to <strong>my site</strong>
</Heading>
```

---

### Button.astro

Versatile button/link component with multiple style variants.

**Props:**
- `href?: string` - If provided, renders as `<a>`, otherwise `<button>`
- `variant?: "primary" | "secondary" | "outline" | "link" | "contact"` - Style variant (default: "primary")
- `size?: "sm" | "md" | "lg"` - Size (default: "md", only applies to primary/secondary)
- `class?: string` - Additional CSS classes
- `ariaLabel?: string` - ARIA label for accessibility
- `onclick?: string` - Click handler (for button element)
- `type?: "button" | "submit" | "reset"` - Button type (default: "button")
- `fullWidth?: boolean` - Take full width of container (default: false)

**Examples:**
```astro
<!-- Primary button link -->
<Button href="#contact" size="lg">Need a designer?</Button>

<!-- Secondary button -->
<Button variant="secondary" size="md">Learn More</Button>

<!-- Outline style (used in nav) -->
<Button href="#contact" variant="outline">Contact</Button>

<!-- Link style -->
<Button href="/work/project" variant="link">Read The Story</Button>

<!-- Contact button (special variant) -->
<Button variant="contact" onclick="copyEmail()" ariaLabel="Copy email" fullWidth>
  <div>Click to copy email</div>
</Button>

<!-- Regular button element -->
<Button type="submit" variant="primary">Submit Form</Button>
```

---

### WorkCard.astro

Card component for displaying work/project items with consistent layout.

**Props:**
- `title: string` - Project title (required)
- `category: string` - Project category/type (required)
- `description: string` - Project description (required)
- `imageSrc: string` - Image source URL (required)
- `imageAlt: string` - Image alt text (required)
- `linkUrl: string` - Link to full case study (required)
- `linkText?: string` - Custom link text (default: "Read The Story")
- `linkDisabled?: boolean` - Disable the link (default: false)
- `imageWidth?: number` - Image width (default: 800)
- `imageHeight?: number` - Image height (default: 600)

**Example:**
```astro
<WorkCard
  title="Redefining the digital viewing landscape of the Berlin Philharmonic."
  category="App Design"
  description="A pioneer in its category, the Berlin Philharmonic's subscription service..."
  imageSrc={`${imagesBase}/works-dch-thumb.png`}
  imageAlt="Berlin Philharmonic app preview"
  linkUrl="/work/digital-concert-hall"
/>

<!-- Disabled link -->
<WorkCard
  title="Coming Soon Project"
  category="Web Design"
  description="This project is still under wraps..."
  imageSrc="/images/placeholder.png"
  imageAlt="Project preview"
  linkUrl="#"
  linkDisabled={true}
/>
```

---

### Figure.astro

Flexible figure component for images and videos with optional lightbox, captions, and AOS animations.

**Props:**
- `src: string` - Image/video source URL (required)
- `alt: string` - Alt text for images (required)
- `caption?: string` - Figure caption
- `class?: string` - Additional CSS classes for figure
- `imageClass?: string` - Additional CSS classes for image/video
- `captionClass?: string` - Additional CSS classes for caption
- `width?: number` - Image width (default: 1200)
- `height?: number` - Image height (default: 800)
- `layout?: "default" | "window-sm" | "window-md" | "window-rounded"` - Layout style (default: "default")
- `lightbox?: boolean` - Enable FSLightbox integration (default: false)
- `aos?: boolean` - Enable AOS animations (default: false)
- `aosEffect?: string` - AOS animation type (default: "fade-up")
- `aosDuration?: number` - Animation duration (default: 600)
- `aosDelay?: number` - Animation delay (default: 0)
- `aosOffset?: number` - Viewport offset (default: 100)
- `aosEasing?: string` - Animation easing (default: "ease-out")
- `isVideo?: boolean` - Render as video element (default: false)
- `videoProps?: object` - Video element properties (controls, autoplay, loop)

**Examples:**
```astro
<!-- Simple image -->
<Figure
  src="/images/photo.jpg"
  alt="Description"
  caption="Photo caption here"
/>

<!-- Image with lightbox -->
<Figure
  src="/images/screenshot.png"
  alt="App screenshot"
  lightbox={true}
  layout="window-md"
  class="mx-auto w-1/2"
/>

<!-- Image with AOS animation -->
<Figure
  src="/images/hero.jpg"
  alt="Hero image"
  aos={true}
  aosEffect="fade-up"
  aosDuration={600}
  aosDelay={200}
/>

<!-- Video -->
<Figure
  src="/videos/demo.mp4"
  alt="Demo video"
  isVideo={true}
  videoProps={{ controls: true, loop: true }}
  layout="window-sm"
/>

<!-- Complex example with custom classes -->
<Figure
  src="/images/work/project.png"
  alt="Project mockup"
  caption="Final design implementation"
  class="sm:w-9/12 self-end"
  imageClass="rounded-md shadow-lg-flat-r"
  captionClass="text-center"
  lightbox={true}
  aos={true}
/>
```

---

### SocialLinks.astro

Renders a list of social media links with icons, either using default links or custom ones.

**Props:**
- `links?: SocialLink[]` - Custom array of links (see interface below)
- `imagesBase?: string` - Base path for images (default: "/assets/images")
- `iconSize?: "sm" | "md" | "lg"` - Icon size (default: "md")
- `layout?: "horizontal" | "vertical"` - Layout direction (default: "horizontal")
- `class?: string` - Additional CSS classes

**SocialLink Interface:**
```typescript
{
  name: string;
  url: string;
  icon: string;
  title?: string;
}
```

**Default Links:**
- LinkedIn
- Threads
- Dribbble
- ADPList

**Examples:**
```astro
<!-- Use default links -->
<SocialLinks />

<!-- Custom size and layout -->
<SocialLinks iconSize="lg" layout="vertical" />

<!-- Custom links -->
<SocialLinks
  links={[
    { name: "GitHub", url: "https://github.com/user", icon: "/icons/github.svg" },
    { name: "Twitter", url: "https://twitter.com/user", icon: "/icons/twitter.svg" }
  ]}
/>

<!-- With additional classes -->
<SocialLinks class="items-start mt-8 contact-social" />
```

---

## Usage in Layouts

### CaseStudyLayout.astro

The case study layout has been updated to use Section and Heading components:

```astro
<CaseStudyLayout
  title="Project Title"
  client="Client Name"
  deliverables={["UX/UI Design", "User Research"]}
  overview="Project overview text..."
  background="project/bg-image.jpg"
>
  <Section container="narrow" marginX="wide">
    <Heading level={3}>Background</Heading>
    <p>Content...</p>
  </Section>

  <Section container="wide" class="my-16">
    <Figure
      src="/images/screenshot.png"
      alt="Screenshot"
      lightbox={true}
      layout="window-md"
    />
  </Section>
</CaseStudyLayout>
```

---

## Best Practices

1. **Use Section for all major page blocks** - Provides consistent spacing and background management
2. **Use Heading for all headings** - Centralizes AOS animation logic and ensures consistent styling
3. **Use Figure for all images in case studies** - Simplifies lightbox integration and maintains consistent layouts
4. **Use Button for all CTAs and links** - Ensures consistent button styling across the site
5. **Prefer composition over props** - Use slots when content is complex or contains markup

## Component Architecture

These components follow these principles:

- **Minimal and focused** - Each component has a single responsibility
- **Highly composable** - Components work together seamlessly
- **Flexible through props** - Support common variations without creating new components
- **Type-safe** - Full TypeScript support with exported interfaces
- **Accessible** - ARIA attributes and semantic HTML
- **AOS-ready** - Standardized animation support across visual components

## Migration Guide

When updating existing pages to use these components:

1. Import the needed components at the top of your file
2. Replace `<section>` with `<Section>`, mapping classes to props
3. Replace headings with `<Heading>`, moving AOS data attributes to props
4. Replace image/figure blocks with `<Figure>` component
5. Replace buttons and CTAs with `<Button>` component
6. Test for visual regressions and adjust props as needed

Example migration:

**Before:**
```astro
<section class="contain-wide margins-x-wide margins-y" data-bg-class="bg-lime">
  <h2 class="text-h2" data-aos="fade" data-aos-duration="1200">Title</h2>
  <a href="/link" class="button button-large">Click Me</a>
</section>
```

**After:**
```astro
<Section bgClass="bg-lime" marginY={true}>
  <Heading level={2} aos={true}>Title</Heading>
  <Button href="/link" size="lg">Click Me</Button>
</Section>
```
