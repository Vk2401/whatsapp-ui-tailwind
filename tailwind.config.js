/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://docegeracao.com.br/wp-content/uploads/2019/06/bg-whatsapp.jpg')",
      }
    },
  },
  plugins: [],
}