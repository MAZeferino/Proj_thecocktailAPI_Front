module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sevillana: ['Sevillana', 'cursive'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};