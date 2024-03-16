/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom color here
        'custom-purpel': '#1B3E80',
        'purpel': '#367CFF',

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