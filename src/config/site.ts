import type { Metadata } from "next";

export const siteConfig = {
  name: "Atlas Construction Group",
  description:
    "Licensed general contractor specializing in residential and commercial construction projects. Local quality, global standards.",
  url: "https://atlasconstruction.demo", // Placeholder URL
  ogImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  links: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  contact: {
    email: "info@atlasconstructiongroup.com",
    phone: "(713) 555-0198",
    address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027",
  },
};

export type SiteConfig = typeof siteConfig;