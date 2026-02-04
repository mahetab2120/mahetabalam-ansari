/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',     // ← this is the most important line
  theme: {
    extend: {
      // You can add custom dark mode colors here if needed
      colors: {
        // Optional: define semantic colors
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        // ... more if you want
      },
    },
  },
  plugins: [],
};