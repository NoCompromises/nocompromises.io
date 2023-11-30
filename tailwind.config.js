/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      blue: {
        1: '#0071BC',
        2: '#29abe2',
        3: '#a5f3fc',
      },
      'light-blue': '#B3C4D9',
      'dark-blue': {
        1: '#0F1B2B',
        2: '#0E2439',
      },
      'gradient-blue': {
        start: '#29aBe2',
        end: '#0071bc',
      },
    },
    extend: {},
    plugins: [],
  },
};
