/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom color here
        'custom-blue': '#50C2C9',
        'blue': '#8FD1D7  ',

      },
      fontFamily: {
        "Robot": ["Roboto"],
        "Lato": ["Lato"],
        "Inter": ["Inter"],
        "poppins": ["Poppins"],
        "PottaOne": ["PottaOne"],
        "averia-serif-libre": ["averia-serif-libre"],

      }
    },
  },
  plugins: [],
}