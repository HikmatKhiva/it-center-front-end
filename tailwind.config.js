/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "main": "#7dba28",
        "dark": "#03001c",
        "light-dark": "#111827"
      },
      backgroundImage: {
        "notFound": "url('./src/assets/bg-notFound.jpg')"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      boxShadow: {
        "nav-dark": " #7dba28 0px 1px 2px 0px",
        "nav-light": "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        "card-light": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "card-dark": "#7dba28 0px 1px 0px",
      }
    },
  },
  plugins: [

  ],
};
