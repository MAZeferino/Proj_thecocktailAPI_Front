module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
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