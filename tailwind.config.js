module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: "'Open Sans', sans-serif",
      body: "'Open Sans', sans-serif",
      heading: "'Playfair Display', sans-serif",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
