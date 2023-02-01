/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'bounce 2s ease-in-out infinite ',
      }
    },
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ],
}