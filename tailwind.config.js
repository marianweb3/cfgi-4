/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#070504",
        orangeBg: "#FF532E",
      },
      fontFamily: {
        "work-sans": ['"Work Sans"', "sans-serif"],
        neue: ['"Neue Machina"', "sans-serif"],
      },
      backgroundImage: {
        noise: "url('/assets/noise.png')",
      },
    },
  },
  plugins: [],
};
