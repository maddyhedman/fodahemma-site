module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      brown: "#7A6263",
      purple: "#9BA2FF",
      beige: "#D1C2B5",
      grayDark: "#273444",
      gray: "#8492a6",
      grayLight: "#d3dce6",
      green: "#32533D",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Ogg", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
