// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — The first image visitors see — Modern construction site at sunset
  "hero": {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern construction site crane against sunset sky",
    width: 2070,
    height: 1380,
  },

  // Alternative hero image — Skyscraper architecture detail
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern glass skyscraper architecture detail",
    width: 2070,
    height: 1380,
  },

  // About page — Construction team reviewing blueprints on site
  "about": {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    alt: "Construction team reviewing blueprints on site",
    width: 2070,
    height: 1380,
  },

  // Service 1: General Contracting — Foundation pouring
  "service-1": {
    src: "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=2069&auto=format&fit=crop",
    alt: "Concrete foundation pour at residential site",
    width: 2069,
    height: 1379,
  },

  // Service 2: Commercial — Steel beams structure
  "service-2": {
    src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1965&auto=format&fit=crop",
    alt: "Steel beam structure of commercial building",
    width: 1965,
    height: 1474,
  },

  // Service 3: Renovation — Interior framing
  "service-3": {
    src: "https://images.unsplash.com/photo-1581578731117-104f2a8d3e7e?q=80&w=2070&auto=format&fit=crop",
    alt: "Interior framing and renovation work",
    width: 2070,
    height: 1380,
  },

  // Gallery 1: Finished Commercial Building
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
    alt: "Finished commercial office building exterior",
    width: 2070,
    height: 1380,
  },

  // Gallery 2: Luxury Residential Home
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1600596542815-e32c2159f728?q=80&w=2072&auto=format&fit=crop",
    alt: "Modern luxury residential home exterior",
    width: 2072,
    height: 1381,
  },

  // Team Member 1: Project Manager
  "team-1": {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
    alt: "Portrait of Senior Project Manager",
    width: 1887,
    height: 2360,
  },

  // Gallery 3: Construction Site Safety Meeting
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
    alt: "Construction safety meeting on site",
    width: 2070,
    height: 1380,
  },

  // CTA Section Background — Blueprint overlay or site
  "cta": {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    alt: "Architectural blueprints and tools on desk",
    width: 2070,
    height: 1380,
  },

  // Testimonial Background — Clean office interior
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern clean office interior",
    width: 2070,
    height: 1380,
  },
} as const;

export type ImageSlot = keyof typeof images;