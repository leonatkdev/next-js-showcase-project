import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    backgroundImage: {
      gradientToRight: "linear-gradient(45deg , #262626, #262626 53%)",
    },
    boxShadow: {
      archievcardsshadow: "0 0 0 4px #191919", // Custom shadow
      propertySearch: "0 0 0 6px #191919",
    },
  },
  plugins: [],
} satisfies Config;
