/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#40E0D0", // turquoise
          warm: "#FFB347",    // warm orange  
          coral: "#FF6B6B",   // soft coral red
        },
        dark: {
          DEFAULT: "#121212",
          light: "#1e1e1e",
          lighter: "#252525",
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
        logo: ['"ZCOOL QingKe HuangYou"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
