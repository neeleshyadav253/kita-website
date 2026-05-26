/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        awo: {
          red: '#E2001A',
          'red-dark': '#B30015',
          'red-light': '#F04D5F',
          'red-soft': '#FDE7EA',
          orange: '#EC7405',
          'orange-light': '#F39A4A',
          'orange-soft': '#FDE7CC',
          blue: '#009EE0',
          'blue-light': '#5BC0EE',
          'blue-soft': '#D6F0FA',
          green: '#79B530',
          'green-light': '#A2CF66',
          'green-soft': '#E6F2D6',
          yellow: '#FECD1B',
          'yellow-light': '#FEDD5C',
          'yellow-soft': '#FFF4CC',
          grey: '#1F2937',
          'grey-light': '#6B7280',
          'grey-soft': '#9CA3AF',
          cream: '#FFFFFF',
          'cream-dark': '#F3F4F6',
          paper: '#FFFFFF',
          fog: '#F4F4F5',
          mist: '#FAFBFC',
          sun: '#FECD1B',
          'sun-light': '#FEDD5C',
          'sun-soft': '#FFF4CC',
          grass: '#79B530',
          'grass-light': '#A2CF66',
          'grass-soft': '#E6F2D6',
          blush: '#EC7405',
          'blush-light': '#F39A4A',
          'blush-soft': '#FDE7CC',
          lavender: '#009EE0',
          'lavender-soft': '#D6F0FA',
          ink: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['"AWO Fago Office"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"AWO Fago Condensed"', '"AWO Fago Office"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(31, 41, 55, 0.10)',
        'card-hover': '0 18px 44px -12px rgba(226, 0, 26, 0.28)',
        glow: '0 0 0 1px rgba(226, 0, 26, 0.10), 0 12px 40px -10px rgba(226, 0, 26, 0.35)',
        soft: '0 2px 10px -2px rgba(31, 41, 55, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-slow': 'pulseSoft 4s ease-in-out infinite',
        'marquee': 'marquee 36s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grain':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.045 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};
