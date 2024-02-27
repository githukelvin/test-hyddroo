/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primaryColor: "#497b12",
      primary2: "#7eb741",
      accentColor: "#36a3ca",
      accent2: "#55b0d0",
      white: "#fdfdfd",
      black: "#141414",
      gray: "#C9D3D3",
      danger: "ec2424e3",
      black2: "#383938",
    },
    screens: {
      smm: { max: "525.98px" },
      // => @media (max-width: 639px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdm: { min: "526px", max: "949.98px" },
      // => @media (max-width: 768px) { ... }
      lg: "950px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
