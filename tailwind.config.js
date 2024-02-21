/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    gradients: {
      mygradient: ['to-right', 'rgba(0, 102, 255, 1)', 'rgba(12, 236, 237, 1)'], // Example gradient values
    },
    extend: {
      gradientTextColors: theme => {
        const gradients = theme('gradients', {});
        return Object.keys(gradients).reduce((utilities, name) => {
          const value = gradients[name];
          utilities[`.gradient-text-${name}`] = { backgroundClip: 'text', backgroundImage: `linear-gradient(${value})` };
          return utilities;
        }, {});
      },
    
      colors: {
        'top-color': '#8e4d57',
        'heading': '#fcfbfc',
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif']
      },
      backgroundImage: {
        "bg-pattern": "url('src/assets/ring.png')",
      },
    
      screens: {
        md: "800px",
      },
      width: {
        128: "35rem",
        // custom width
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
};
