/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        customColor: '#124838',
        linear: '#85C7B3', // Ubah nilai linear menjadi format yang sesuai
        green: {
          50: "#F2F6EE",
          100: "#E2ECDA",
          200: "#C7DAB9",
          300: "#A9C695",
          400: "#8EB573",
          500: "#729C53",
          600: "#5C7E43",
          700: "#445D32",
          800: "#2E3F22",
          900: "#161E10",
          950: "#0C1109"
        },
        custom: {
          'E3A476': '#E3A476',
        },
      }
    }
  },
  plugins: []
};
