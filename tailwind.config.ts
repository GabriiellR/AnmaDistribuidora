import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#166534",
          dark: "#14532d",
        },
        accent: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
        },
        surface: {
          bg: "#f0fdf4",
          border: "#E2E8F0",
        },
        text: {
          DEFAULT: "#1A1A2E",
          muted: "#64748B",
        },
        footer: "#0f2918",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
