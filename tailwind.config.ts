import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        keyframes: {
          fadeIn:{
            '0%': { opacity: '0', transform: 'translateY(20px)'},
            '100%': { opacity: '1', transform: 'translateY(0)'},
          },
          },
          animation:{
            fadeInUp: 'fadeIn 0.5s ease-in-out 0.2s'
          },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
    plugins: [],
  } satisfies Config;
