/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#070709',
        surface: '#0d0d11',
        'surface-subtle': '#14141a',
        'surface-border': 'rgba(255, 255, 255, 0.08)',
        'surface-hover': 'rgba(255, 255, 255, 0.03)',
        accent: {
          gold: '#e6c875',
          'gold-light': '#fdf3d8',
          'gold-dark': '#b3943b',
          muted: '#8e8b82',
        },
        ink: {
          light: '#f5f5f7',
          muted: '#a1a1aa',
          dim: '#52525b',
        }
      },
      fontFamily: {
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        serifHeading: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'ultra-wide': '0.35em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-gentle': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
