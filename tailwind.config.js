module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sevillana: ['Sevillana', 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};