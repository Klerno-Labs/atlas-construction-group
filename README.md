# Atlas Construction Group Website

A modern, high-performance website built for Atlas Construction Group. This bespoke solution highlights the company's expertise in residential and commercial construction through a clean, professional design, optimized for lead generation and user experience.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Utility-first, strictly configured)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Manrope (Headings) & Inter (Body) via `next/font`

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd atlas-construction-group
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure Environment Variables**
   Copy the `.env.example` file to `.env.local` and fill in the required values.
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure Overview

```
atlas-construction-group/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page
│   │   ├── api/          # API routes (e.g., contact form)
│   │   ├── services/     # Services page
│   │   ├── layout.tsx    # Root layout (fonts, global styles)
│   │   └── page.tsx      # Homepage
│   ├── components/       # Reusable React components
│   │   ├── ui/           # Atomic UI elements (Button, Input, etc.)
│   │   ├── sections/     # Page sections (Hero, Features, Footer)
│   │   └── Navbar.tsx    # Navigation component
│   ├── config/           # Configuration files
│   │   ├── images.ts     # ⚠️ CENTRAL IMAGE CONFIGURATION
│   │   └── site.ts       # Site metadata & constants
│   └── lib/              # Utility functions (cn, formatters)
├── public/               # Static assets (favicon, robots.txt)
├── .env.local            # Environment variables (not committed)
└── tailwind.config.ts    # Tailwind configuration
```

## Image Customization

All images across the website are managed centrally in `src/config/images.ts`. **Do not** hardcode image URLs in individual components.

### How to change an image:

1. Open `src/config/images.ts`.
2. Find the specific slot you want to change (e.g., `"hero"`, `"about"`, `"service-1"`).
3. Replace the `src` URL with your new image URL (e.g., a link to your AWS S3 bucket, Cloudinary, or Unsplash).
4. Update the `alt` text to accurately describe the new image for accessibility.
5. Save the file. The change will reflect immediately on all pages using that image slot.

### Available Image Slots

- `"hero"`: Homepage main banner (Background: "Modern office workspace with natural light").
- `"hero-alt"`: Inner page banner or alternative hero.
- `"about"`: About page/team section image.
- `"service-1"`, `"service-2"`, `"service-3"`: Images for the specific service cards.
- `"gallery-1"`, `"gallery-2"`, `"gallery-3"`: Portfolio/Project showcase images.
- `"team-1"`: Team member profile photo.
- `"cta"`: Call-to-action section background.
- `"testimonial-bg"`: Testimonials section background.

## Brand Customization

### Changing Colors

The color palette is defined in `tailwind.config.ts`. To change the brand colors:

1. Open `tailwind.config.ts`.
2. Locate the `theme.extend.colors` section.
3. Modify the hex codes for the primary, secondary, or accent colors.
   - **Primary**: Deep Navy (Default: `#0A2342`)
   - **Accent**: Industrial Gold (Default: `#FFB800`)
4. The change will apply globally to buttons, links, headings, and backgrounds.

### Changing Fonts

Typography is configured in `src/app/layout.tsx`.

1. Open `src/app/layout.tsx`.
2. Look for the `Manrope` and `Inter` imports from `next/font/google`.
3. Replace them with your preferred Google Fonts.
4. Update the `font-heading` and `font-body` variables in `tailwind.config.ts` to match your new font family names.

### Changing the Logo

The logo is treated as an image or text component in `src/components/Navbar.tsx`.

1. If using a text logo: Edit the `<Link>` content in `Navbar.tsx`.
2. If using an image logo:
   - Upload your logo image to your hosting provider.
   - Add the logo URL to `src/config/images.ts` (e.g., add a `"logo"` slot).
   - Update `Navbar.tsx` to import and render the `next/image` component using that config slot.

## Environment Variables

Required variables are listed in `.env.example`. Ensure `NEXT_PUBLIC_SITE_URL` is set correctly for production deployments to ensure Open Graph images and links work as expected.

## Deployment Instructions (Vercel)

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com).
3. Click "Add New Project" and import your repository.
4. **Environment Variables**: Add the variables from `.env.local` into the Vercel project settings.
5. Click "Deploy".
6. Once deployed, configure your custom domain in the Vercel dashboard settings.

For detailed deployment steps, see `DEPLOYMENT_GUIDE.md`.