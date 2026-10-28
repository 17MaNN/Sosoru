/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EFE6',
        ink: '#141414',
        honey: '#C98F4F',
        slate: '#2B3A4A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        jp: ['"Shippori Mincho"', '"Cormorant Garamond"', 'serif'],
      },
      fontSize: {
        base: ['17px', { lineHeight: '1.7' }],
        label: ['0.625rem', { lineHeight: '1.6', letterSpacing: '0.22em' }],
        display: ['clamp(2.7rem, 9vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(2rem, 6vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.005em' }],
      },
      // Radius stays between 0 and 2px everywhere, by construction.
      borderRadius: { none: '0px', xs: '1px', sm: '1px', DEFAULT: '2px', md: '2px', lg: '2px', xl: '2px', '2xl': '2px', '3xl': '2px', full: '2px' },
      spacing: { section: 'clamp(4.5rem, 11vw, 9rem)', gutter: '1.5rem', header: '4.75rem' },
      maxWidth: { content: '78rem', read: '54ch' },
      screens: { xs: '430px' },
      boxShadow: {
        warm: '0 28px 70px -48px rgba(43, 58, 74, 0.55)',
        plate: '0 1px 0 rgba(20, 20, 20, 0.06)',
      },
      transitionTimingFunction: { craft: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      transitionDuration: { '1200': '1200ms' },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -17px, 0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.42' },
          '50%': { opacity: '0.78' },
        },
        'scroll-line': {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '45%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '55%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        bob: 'bob 8s ease-in-out infinite',
        'bob-slow': 'bob 12s ease-in-out infinite',
        glow: 'glow 9s ease-in-out infinite',
        'scroll-line': 'scroll-line 2.8s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
    },
  },
  plugins: [],
}
