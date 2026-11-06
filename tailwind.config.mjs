/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        crema: {
          50: "#fdfbf6",
          100: "#faf4e8",
          200: "#f2e6cd",
          300: "#e8d4a8",
        },
        pomodoro: {
          500: "#c0392b",
          600: "#a7301f",
          700: "#8a2419",
        },
        basilico: {
          500: "#4b6a43",
          600: "#3b5435",
          700: "#2e4229",
        },
        inchiostro: {
          900: "#1f1b16",
          800: "#2a251e",
        },
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "Georgia", "serif"],
        sans: ["\"Inter\"", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
