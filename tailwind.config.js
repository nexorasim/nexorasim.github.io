/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: '#F5F5F5',
        accent: '#00D1FF',
        graphite: '#333333',
      },
      fontFamily: {
        primary: ['Segoe UI Variable', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        myanmar: ['Leelawadee UI', 'Myanmar Text', 'sans-serif'],
      },
      borderRadius: {
        'large': '24px',
        'medium': '16px',
        'small': '8px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.1)',
        'elevated': '0 16px 64px rgba(0,0,0,0.15)',
        'floating': '0 24px 96px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}