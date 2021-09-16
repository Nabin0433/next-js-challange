module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary_p_2: "#458FF6",
        hover_primary_p_2: "#043D8D",
        danger: "#e3342f",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
