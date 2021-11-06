module.exports = {
  purge:  [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      mRed: '#B70001',
      mYellow: '#FF8001',
      mBlue: '#13017C',
      mPink: '#F447A1'
    },
    animation: {
      'spin-slow': 'spin 3.5s linear infinite',
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'motion-safe', 'responsive']
    },
  },
  plugins: [],
}
