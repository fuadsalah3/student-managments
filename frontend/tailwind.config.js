/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#0A0A0A',
          gold: '#D4AF37',
          'gold-light': '#E2C65A',
          'gold-dark': '#B8962F',
          red: '#C41E3A',
          'red-light': '#E63946',
          surface: 'rgba(255, 255, 255, 0.03)',
          'surface-hover': 'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.06)',
          'border-light': 'rgba(255, 255, 255, 0.1)',
          text: {
            primary: '#F5F5F0',
            secondary: '#A0A0A0',
            muted: '#666666',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.02em',
        'luxury-wide': '0.05em',
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [],
}
