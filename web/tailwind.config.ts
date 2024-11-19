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
        primary: '#1E481F',       // Primary color
        primaryLight: '#1E481F',  // If you have a lighter version of the primary color, adjust this.
        textPrimary: '#0F172A',   // Primary text color
        lightText: '#777777',     // Light text color
        background: '#F6F6F6',    // Background color
    },
    screens:{
      xs:'360px'
    }
    },
  },
  plugins: [],
} satisfies Config;
