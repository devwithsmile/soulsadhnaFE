/** @type {import('tailwindcss').Config} */
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
        text: "#0f1010",
        "bg-main": "#e5f8ff",
        primary: {
          DEFAULT: "#00aceb",
          light: "#b2e0f0",
          dark: "#54a5c0",
        },
        secondary: {
          DEFAULT: "#54a5c0",
          light: "#b2e0f0",
          dark: "#00aceb",
        },
        accent: {
          DEFAULT: "#b2e0f0",
          light: "#e5f8ff",
          dark: "#54a5c0",
        },
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: ["var(--font-roboto)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
