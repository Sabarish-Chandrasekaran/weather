/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      signature: ["Great Vibes"],
    },
    extend: {
      backgroundImage: {
        dyanamic: "url('https://source.unsplash.com/600x900/?mist')",
      },
    },
  },
  plugins: [],
};
