export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#2b2b2b',
        accent: '#f8f8f8',
        glass: 'rgba(255, 255, 255, 0.06)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}