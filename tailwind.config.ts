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
        // Redesigned Dr. Maya Reynolds Theme (Warm Coastal Sage & Sand)
        maya: {
          bg: "#FAF7F2",
          card: "#FFFFFF",
          surface: "#F4EFEA",
          sage: "#4A6B5D",
          sageDark: "#334D41",
          sageLight: "#E8EFEA",
          terracotta: "#C87D55",
          terracottaLight: "#FBF0EB",
          charcoal: "#232624",
          muted: "#666B66",
          border: "#E5DDD3",
          accent: "#D98860",
          warmGold: "#C59B27",
        },
        // Original Conejo Valley Counseling Theme (Dusty Rose, Earth Brown & Warm Cream)
        conejo: {
          bg: "#FBF7F4",
          surface: "#F4ECE6",
          rose: "#9C6258",
          roseDark: "#7E4B42",
          roseLight: "#F7EEEC",
          earth: "#473C38",
          muted: "#7A6F6B",
          darkBg: "#2B2624",
          accent: "#C28574",
          border: "#E9DFD8",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        arch: "180px 180px 0 0",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0, 0, 0, 0.07)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
