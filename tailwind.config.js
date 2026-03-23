/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1120',
        'navy-light': '#1A2540',
        'navy-mid': '#131B2E',
        gold: '#C8973E',
        'gold-light': '#E8C068',
        'gold-dark': '#9A7230',
        cream: '#FAF7F2',
        warm: '#F5F0E8',
        'text-primary': '#2D3748',
        'text-secondary': '#718096',
        'text-muted': '#A0AEC0',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
        arabic: ['"Noto Kufi Arabic"', 'Outfit', 'sans-serif'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(.16,1,.3,1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
