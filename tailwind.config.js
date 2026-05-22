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
          red: '#2563EB',
          'red-dark': '#1E40AF',
          'red-light': '#60A5FA',
          'red-soft': '#DBEAFE',
          grey: '#1F2937',
          'grey-light': '#6B7280',
          'grey-soft': '#9CA3AF',
          cream: '#EFF6FF',
          'cream-dark': '#DBEAFE',
          paper: '#F8FAFC',
          fog: '#F1F5F9',
          mist: '#FAFBFC',
          sun: '#F59E0B',
          'sun-light': '#FCD34D',
          'sun-soft': '#FEF3C7',
          grass: '#16A34A',
          'grass-light': '#4ADE80',
          'grass-soft': '#DCFCE7',
          blush: '#EC4899',
          'blush-light': '#F9A8D4',
          'blush-soft': '#FCE7F3',
          lavender: '#8B5CF6',
          'lavender-soft': '#EDE9FE',
          ink: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(31, 41, 55, 0.10)',
        'card-hover': '0 18px 44px -12px rgba(37, 99, 235, 0.28)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.10), 0 12px 40px -10px rgba(37, 99, 235, 0.35)',
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
