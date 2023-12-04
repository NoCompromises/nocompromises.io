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
        3: '#B3C4D9',
        201: '#0071BC33',
        202: '#29abe233',
      },
      'dark-blue': {
        1: '#0F1B2B',
        2: '#0E2439',
      },
      'dark-green': {
        1: '#143E44',
      },
      green: {
        1: '#5FDDB7',
        2: '#72F8CF',
        3: '#4FCDA7',
        4: '#21997C',
      },
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
    fontSize: {
      'h1-b': [
        '52px',
        {
          lineHeight: '64px',
          fontWeight: '700',
        },
      ],
      'h1-l': [
        '52px',
        {
          lineHeight: '64px',
          fontWeight: '300',
        },
      ],
      'h2-b': [
        '40px',
        {
          lineHeight: '47px',
          fontWeight: '700',
        },
      ],
      'h2-l': [
        '40px',
        {
          lineHeight: '47px',
          fontWeight: '300',
        },
      ],
      'h3-b': [
        '31px',
        {
          lineHeight: '37px',
          fontWeight: '700',
        },
      ],
      'h3-l': [
        '31px',
        {
          lineHeight: '37px',
          fontWeight: '300',
        },
      ],
      'h4-b': [
        '22px',
        {
          lineHeight: '27px',
          fontWeight: '700',
        },
      ],
      'h4-l': [
        '22px',
        {
          lineHeight: '27px',
          fontWeight: '300',
        },
      ],
      'h5-b': [
        '18px',
        {
          lineHeight: '27px',
          fontWeight: '700',
        },
      ],
      'h5-l': [
        '18px',
        {
          lineHeight: '27px',
          fontWeight: '300',
        },
      ],
      sm: [
        '14px',
        {
          lineHeight: '23px',
          fontWeight: '300',
        },
      ],
      md: [
        '18px',
        {
          lineHeight: '27px',
          fontWeight: '300',
        },
      ],
      base: [
        '18px',
        {
          lineHeight: '27px',
          fontWeight: '300',
        },
      ],
      lg: [
        '22px',
        {
          lineHeight: '31px',
          fontWeight: '300',
        },
      ],
    },
    listStyleImage: {
      starter: 'url("/images/bullet-starter.svg")',
      diamond: 'url("/images/bullet-diamond.svg")',
    },
    extend: {},
    plugins: [],
  },
};
