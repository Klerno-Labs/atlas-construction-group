import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2342", // Deep Navy
          50: "#E8ECF1",
          100: "#C2CFD9",
          200: "#9BAFC0",
          300: "#748EA6",
          400: "#4D6E8D",
          500: "#264E73",
          600: "#0A2342", // Main
          700: "#081B33",
          800: "#061424",
          900: "#040D16",
        },
        secondary: {
          DEFAULT: "#0056b3", // Steel Blue
          hover: "#004494",
        },
        accent: {
          DEFAULT: "#FFB800", // Industrial Gold
          hover: "#e5a600",
          light: "#FFF4CC",
        },
        background: "#F4F6F8", // Off-White Concrete
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#2D3748", // Dark Slate
          heading: "#1A202C", // Midnight Blue
          muted: "#A0AEC0", // Cool Gray
        },
      },
      fontFamily: {
        heading: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        'section': '120px', // --section-gap
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'card': '12px', // rounded-xl equivalent but cleaner for construction
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;