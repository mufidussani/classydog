module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#00807F",
          normal: "#08A78B",
          light: "#B7FAEE",
        },
        blue: {
          dark: "#181C32",
          normal: "#1A516F",
          light: "#2C4964",
        },
        red: "#F1416C",
        yellow: "#FFC700",
        white: {
          dark: "#F5F5F5",
          normal: "#FFFFFF",
          light: "#7E829908",
        },
        black: "#3F4254",
        gray: "rgba(126, 130, 153, 0.06)",
      },
      fontSize: {
        heading: [
          "32px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        subHeading: [
          "24px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        subHeadingM: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        lilSubHeading: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        lilSubHeadingM: [
          "14px",
          {
            lineHeight: "16px",
            fontWeight: "600",
          },
        ],
        content: "16px",
        contentM: "12px",
      },
      screens: {
        mobile: { MIN: "360px", max: "639px" },
        navbar1: { MIN: "1280px", max: "1400px" },
        xsm: "400px",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      animation: {
        fade: "fadeIn 500ms",
      },
      dropShadow: {
        medium: "0 14px 16px rgba(0, 0, 0, 0.15)",
        nav: "0 8px 8px rgba(158, 158, 158, 0.15)",
        foot: "12px 0 12px rgba(158, 158, 158, 0.15)",
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: "50%" },
          "100%": { opacity: "100%" },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
