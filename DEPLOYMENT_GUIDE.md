# Deployment Guide

This guide will walk you through deploying the Atlas Construction Group website to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com) account.
- A GitHub repository containing the project code.
- Access to the project's environment variables.

## Step 1: Prepare the Repository

Ensure your code is pushed to a GitHub repository.
1. Verify `package.json` contains the build script: `"build": "next build"`.
2. Ensure `.env.example` is up to date with the variables used in `.env.local`.
3. Commit and push all changes.

## Step 2: Import Project to Vercel

1. Log in to your Vercel Dashboard.
2. Click **"Add New..."** -> **"Project"**.
3. Under **"Import Git Repository"**, find and select your `atlas-construction-group` repository.
4. Click **"Import"**.

## Step 3: Configure Project Settings

### Framework Preset
Vercel should automatically detect **Next.js**.
- **Framework Preset**: Next.js
- **Root Directory**: `./` (leave as default unless changed)
- **Build Command**: `npm run build` (or `yarn build` / `pnpm build`)
- **Output Directory**: `.next` (This is handled automatically by Next.js on Vercel, even with static export). Note: If you enabled `output: 'export'` in `next.config.js`, Vercel usually handles static generation automatically.

### Environment Variables
1. Scroll down to the **"Environment Variables"** section.
2. Add the following variables (Values found in your `.env.local` file):
   - `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g., `https://atlasconstruction.com`).
   - `CONTACT_EMAIL`: The email address where leads should be sent (or an API key if using a service like Formspree/Resend).
3. Click **"Add"** for each variable.

## Step 4: Deploy

1. Click the **"Deploy"** button.
2. Wait for the build process to complete (usually takes 1-2 minutes).
3. You will see a "Congratulations!" screen with a live `.vercel.app` URL.

## Step 5: Domain Setup

1. In the project dashboard, go to the **"Settings"** tab -> **"Domains"**.
2. Enter your custom domain (e.g., `www.atlasconstruction.com`).
3. Choose the recommended option (usually `www` subdomain).
4. Update your DNS records at your domain registrar (GoDaddy, Namecheap, etc.) as instructed by Vercel (typically adding a CNAME record).
5. Once DNS propagates, Vercel will automatically generate an SSL certificate (HTTPS).

## Post-Deploy Checklist

- [ ] **Test the Live URL**: Click around the site to ensure no assets are broken.
- [ ] **Check Forms**: Submit the contact form to ensure leads are being received.
- [ ] **Verify SEO**: View the page source to confirm `<title>` and `<meta>` tags are present.
- [ ] **Lighthouse Audit**: Run Google Lighthouse on the live site to verify Performance > 95.
- [ ] **Mobile Check**: Test the site on an actual mobile device to check responsiveness.

## Troubleshooting

**Build Failed:**
- Check the build logs in Vercel.
- Ensure all environment variables are set correctly.
- Verify `npm install` runs locally without errors.

**Images not loading:**
- Ensure `images.unsplash.com` (or your image host) is allowed in `next.config.js` `remotePatterns` if you are using external domains other than `images.unsplash.com`.

## Redeploying

If you make updates to the code:
1. Push changes to the `main` branch on GitHub.
2. Vercel will automatically trigger a new deployment.
3. Changes will be live within minutes.