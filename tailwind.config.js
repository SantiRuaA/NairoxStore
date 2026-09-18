/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gaming: {
          bg: '#060609',
          dark: '#0C0C14',
          card: '#12121D',
          surface: '#1A1826',
          border: '#2A1F30',
          red: '#FF2A4D',
          crimson: '#DC2626',
          fire: '#FF4500',
          amber: '#F59E0B',
          gold: '#FBBF24',
          yellow: '#FACC15',
          lava: '#FF5722',
          success: '#10B981',
          cyan: '#38BDF8',
        }
      },
      fontFamily: {
        gaming: ['Rajdhani', 'Outfit', 'Inter', 'sans-serif'],
        display: ['Orbitron', 'Rajdhani', 'sans-serif'],
        sans: ['Inter', 'Outfit', 'sans-serif']
      },
      boxShadow: {
        'neon-red': '0 0 15px rgba(239, 68, 68, 0.45), 0 0 30px rgba(239, 68, 68, 0.2)',
        'neon-gold': '0 0 15px rgba(245, 158, 11, 0.45), 0 0 30px rgba(245, 158, 11, 0.2)',
        'neon-fire': '0 0 20px rgba(255, 69, 0, 0.5), 0 0 40px rgba(245, 158, 11, 0.25)',
        'card-glow-red': '0 0 25px rgba(239, 68, 68, 0.15)',
        'card-glow-gold': '0 0 25px rgba(245, 158, 11, 0.18)',
        'pill-active': '0 0 20px rgba(239, 68, 68, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flame-glow': 'flame 2.5s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        flame: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))' },
          '50%': { filter: 'drop-shadow(0 0 18px rgba(245, 158, 11, 0.8))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(255, 69, 0, 0.9))' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
