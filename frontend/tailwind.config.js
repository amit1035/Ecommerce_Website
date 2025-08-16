/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%, 45%, 75%': { transform: 'translateX(-6px)' },
          '30%, 60%, 90%': { transform: 'translateX(6px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'slow-spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'slide-fade': {
          '0%': { opacity: 0, transform: 'translateY(-12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-slide-left': {
          '0%': { opacity: 0, transform: 'translateX(-24px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'pulse-color': {
          '0%, 100%': { color: '#2563EB' },
          '50%': { color: '#3B82F6' },
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.07)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'slide-fade-out-right': {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(24px)' },
        },
        'pop': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        'heartbeat': {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(0.95)' },
          '75%': { transform: 'scale(1.05)' },
        },

        // Input-specific animations
        'glow-border': {
          '0%, 100%': { boxShadow: '0 0 6px 0 rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 12px 4px rgba(59, 130, 246, 0.8)' },
        },
        'input-press': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.97)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'bounce-slow': 'bounce-slow 2.5s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'spin-slow': 'spin-slow 40s linear infinite',
        'slow-spin-reverse': 'slow-spin-reverse 40s linear infinite',
        'slide-fade': 'slide-fade 0.4s ease forwards',
        'fade-slide-left': 'fade-slide-left 0.5s ease forwards',
        'pulse-color': 'pulse-color 3.5s ease-in-out infinite',
        'scale-pulse': 'scale-pulse 3s ease-in-out infinite',
        'wiggle': 'wiggle 0.6s ease-in-out infinite',
        'slide-fade-out-right': 'slide-fade-out-right 0.5s ease forwards',
        'pop': 'pop 0.3s ease forwards',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',

        // For inputs
        'glow-border': 'glow-border 2s ease-in-out infinite',
        'input-press': 'input-press 0.3s ease forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};
