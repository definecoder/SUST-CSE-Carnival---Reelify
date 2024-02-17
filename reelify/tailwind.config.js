/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
      },
    },
    animation: {
      'gradient-x': 'gradient-x 15s ease infinite',
      'gradient-y': 'gradient-y 15s ease infinite',
      'gradient-xy': 'gradient-xy 15s ease infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
      // Add similar keyframes for 'gradient-y' and 'gradient-xy'
    },
    
  },
  darkMode: "class",  
  plugins: [
    nextui(),
    function({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          'scrollbar-width': 'none', /* For Firefox */
          '-ms-overflow-style': 'none', /* For Internet Explorer and Edge */
          '&::-webkit-scrollbar': {
            display: 'none', /* For Chrome, Safari and Opera */
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}