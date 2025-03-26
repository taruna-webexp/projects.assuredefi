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
      },
      backgroundImage: {
        "project-detail-bg":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 92.79%, rgba(255, 255, 255, 0.10) 101.59%), linear-gradient(180deg, rgba(221, 204, 66, 0.30) -39.46%, rgba(210, 194, 63, 0.30) -22.33%, rgba(5, 4, 11, 0.30) 6.22%);",
        "project-bg": "linear-gradient(157deg, #0B092C 4.63%, #04030E 80.62%)",
      },
    },
  },
  plugins: [],
};
