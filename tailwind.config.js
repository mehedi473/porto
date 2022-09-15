/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"],
      rubik: ["Rubik Sans", "sans-serif"],
      montserrat: ["Montserrat Sans", "sans-serif"],
    },
    extend: {
      colors: {
        heading: "#212529",
        headingTopSpan: "#969696",
        paragraph: "#777777",
        primary: "#0088cc",
        secondary: "#504bfd",
      },
    },
  },
  plugins: [],
};
