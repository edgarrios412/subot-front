/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#443d81', // Reemplaza #RRGGBB con tu código hexadecimal
      },
    }
  },
  plugins: [],
}

