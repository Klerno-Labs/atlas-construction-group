import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2342",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0056b3",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FFB800",
          foreground: "#0A2342",
        },
        background: "#F4F6F8",
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#2D3748",
          heading: "#1A202C",
          muted: "#A0AEC0",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        hover: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;