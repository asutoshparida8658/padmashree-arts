import type { Config } from "tailwindcss";

// Palette taken from the artwork: royal blue, deep purple, maroon, leaf green, antique gold, ivory.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
                ink: "#1F2D24",
        royal: "#364D3C",
        maroon: "#8B4536",
        gold: "#D4A96A",
        leaf: "#4F6F55",
        cream: "#F7EFE3",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
