# Changelog

All notable changes to the Atlas Construction Group website will be documented in this file.

## [1.0.0] - 2023-10-27

### Added
- **Initial Release**
- **Core Pages**:
  - Home Page with cinematic Hero section, Service preview, and Lead Gen form.
  - About Page with History, Stats counter, Team grid, and Zig-Zag process layout.
  - Services Page with detailed Accordion list and CTA banner.
- **Design System**:
  - Implemented "Tier 1" Construction design system (Deep Navy & Industrial Gold).
  - Integrated Manrope and Inter typography.
  - Configured responsive breakpoints for Mobile, Tablet, Desktop, and Wide screens.
- **Components**:
  - Sticky Navigation with Mega-menu support and Mobile Hamburger overlay.
  - Bento Grid layout for Services.
  - Project Card with hover zoom and gradient overlay.
  - Floating Label Contact Form with validation.
  - Footer with 4-column layout and legal links.
- **Features**:
  - Fully responsive mobile-first design.
  - Scroll animations using Framer Motion (Fade-up, Stagger).
  - Centralized Image Configuration (`src/config/images.ts`).
  - SEO Optimization (Meta tags, Open Graph, JSON-LD Structured Data).
  - Accessibility (ARIA labels, focus states, semantic HTML).
  - Contact Form with Honeypot spam prevention.
- **Performance**:
  - Next.js 14 App Router implementation.
  - `next/image` optimization for all assets.
  - Static export capability (`output: 'export'`).