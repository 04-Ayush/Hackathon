/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#f59e0b',
        background: '#f9fafb',
        text: '#111827',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}

