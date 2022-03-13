module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // #64748b
        'main-content': '#0f172a',
        'd-main-content': '#fff',
        'sub-content': '#334155',
        'd-sub-content': '#94a3b8',
      },
      backgroundColor: {
        light: '#fff',
        dark: '#1a1b1e',
      },
    },
  },
  plugins: [],
}
