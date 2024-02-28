const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#111",
          300: "#333",
          600: "#666",
          900: "#999",
        },
        btc: "#FF9933",
        eth: "#0066FF",
        bnb: "#FFFF66",
        sol: "#FF9999",
        land: "#090C15",
        card: "#171923",
        green: "#458582",
        darkGreen: "#152C2B",
        lightGreen: "#67DAD6",
        hover: "#1B202C",
      },
      maxWidth: {
        "1/6": "16.666%",
      },
      screens: {
        desktop: { min: "1281px" },
        laptop: { max: "1280px", min: "961px" },
        tablet: { max: "960px", min: "641px" },
        mobile: { max: "640px" },
      },
      inset: {
        68: "272px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
