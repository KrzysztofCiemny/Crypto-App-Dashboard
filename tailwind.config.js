module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      colors: {
        'gray-bg': '#F7F7F9',
        'gray-text': '#9896A1',
        black: '#0A041C',
        green: '#2DC78F',
        red: '#EA4D4D',
        purple: '#7445FB',
      },
    },
  },
  plugins: [],
};
