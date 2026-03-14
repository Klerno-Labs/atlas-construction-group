# Client Handoff Guide

Congratulations on the launch of your new website for **Atlas Construction Group**! This document explains how to manage and update your site content. You don't need to be a programmer to make basic changes.

## What Was Built

We have built a professional, 3-page website designed to generate leads and showcase your work:

1.  **Home Page**: A high-impact introduction with a "Get a Free Estimate" focus.
2.  **About Page**: Tells your story, highlights your safety record, and introduces the team.
3.  **Services Page**: Details your construction capabilities (Commercial, Residential, etc.).

---

## Changing Images

**Good News:** You can change almost any photo on the site by editing **ONE SINGLE FILE**. You do not need to hunt through different code files.

### The Magic File: `src/config/images.ts`

This file controls every image on the website.

**How to swap an image:**

1.  Open the file: `src/config/images.ts`.
2.  Look through the list for the image you want to change. Each has a name (like "hero", "about", "team-1") and a comment explaining where it appears.
3.  Find the `"src"` line for that image.
4.  Replace the URL inside the quotes with the link to your new photo.
    *   *Note: You can use links from Google Photos, Dropbox, Imgur, or your own hosting. Just make sure the link ends in .jpg or .png.*
5.  Update the `"alt"` text. This is a short description of the photo for blind visitors and Google SEO (e.g., change "Modern office workspace" to "Atlas Construction Site Project A").
6.  Save the file.
7.  The website will update automatically!

**Example:**
```typescript
// You want to change the main homepage photo:
"hero": {
  // PASTE YOUR NEW LINK HERE ↓
  src: "https://my-photos.com/new-construction-photo.jpg",
  alt: "Atlas Construction Group latest project",
  width: 1200,
  height: 800,
},
```

### Best Practices for Photos
*   **Size:** Try to use images that are at least 1200 pixels wide.
*   **Shape:** Use landscape (rectangle) images for banners and section backgrounds.
*   **Speed:** Huge files make the site slow. If possible, save your photos as "Web" or "Medium" quality before uploading them to your host.

---

## Changing Text Content

Text is usually found in the page files located in `src/app/`.

*   **Homepage Text**: Edit `src/app/page.tsx`
*   **About Text**: Edit `src/app/about/page.tsx`
*   **Services Text**: Edit `src/app/services/page.tsx`

When you open these files, look for the text inside quotes. You can simply change the words inside the quotes to update your copy.

*Example:* To change the phone number in the footer, search for `(512) 555-0199` in the code and replace it with your number.

---

## Changing Colors & Fonts

If you want to change the "Blue" or "Gold" colors of the site:

1.  Open `tailwind.config.ts`.
2.  Look for the `colors` section.
3.  Change the Hex codes (e.g., `#0A2342`) to your preferred brand colors.

---

## Contact Form

The contact form is set up to capture leads. Currently, it uses a standard configuration. To have these emails sent directly to your inbox, your developer (Pegrio) may need to configure a simple email service or update the API route in `src/app/api/contact/route.ts`.

---

## Support & Maintenance

This site is built on robust technology (Next.js) and hosted on Vercel.

*   **Hosting:** The site automatically updates when you push code changes to the repository.
*   **Backups:** Your code is safely stored in GitHub.
*   **Security:** The site uses modern security standards, including spam protection on forms.

If you run into issues that require code changes or if you want to add complex new features, please contact the Pegrio support team.

**Thank you for choosing Pegrio!**