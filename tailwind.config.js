const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1260px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#0FAE96",
        secondary: "#511281",
        "main-bg": "#11011E"
      },
      backgroundImage: (theme) => ({
        "hero-bg": "url('/hero-bg.jpg')"
      }),
      gradientColorStops: (theme) => ({
        ...theme("colors")
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};