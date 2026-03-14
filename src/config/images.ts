// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically

export const images = {
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop",
    alt: "Construction crane against sunset sky at a commercial building site",
    width: 1600,
    height: 900,
  },

  // Alternative hero image (used on inner pages)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop",
    alt: "Architectural blueprints and safety hard hat on a desk",
    width: 1600,
    height: 900,
  },

  // About page or About section
  "about": {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop",
    alt: "Construction team reviewing plans at a job site",
    width: 1200,
    height: 800,
  },

  // First service card image (Commercial)
  "service-1": {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    alt: "Modern glass office building exterior",
    width: 1200,
    height: 800,
  },

  // Second service card image (Residential)
  "service-2": {
    src: "https://images.unsplash.com/photo-1600596542815-30055e01f5d5?w=1200&h=800&fit=crop",
    alt: "Luxury residential home under construction",
    width: 1200,
    height: 800,
  },

  // Third service card image (Renovation)
  "service-3": {
    src: "https://images.unsplash.com/photo-1590634293927-360b52527231?w=1200&h=800&fit=crop",
    alt: "Interior framing renovation in progress",
    width: 1200,
    height: 800,
  },

  // Gallery/Project 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1595855709915-97066ea4d24e?w=800&h=600&fit=crop",
    alt: "Completed downtown Houston commercial complex",
    width: 800,
    height: 600,
  },

  // Gallery/Project 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    alt: "Custom modern home driveway and facade",
    width: 800,
    height: 600,
  },

  // Team member 1
  "team-1": {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    alt: "Robert Thorne, CEO of Atlas Construction Group",
    width: 400,
    height: 500,
  },

  // Gallery/Project 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=600&fit=crop",
    alt: "Industrial warehouse facility project",
    width: 800,
    height: 600,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=600&fit=crop",
    alt: "Blueprints and tools on a construction site",
    width: 1600,
    height: 600,
  },

  // Testimonials section background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1600&h=900&fit=crop",
    alt: "Modern office meeting room with natural light",
    width: 1600,
    height: 900,
  },
} as const;

export type ImageSlot = keyof typeof images;