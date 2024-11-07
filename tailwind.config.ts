import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        // not forget to change for small screens
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '24px',
        '2xl': '120px',
      },
    },
    screens: {
      sm: '320px',
      // => @media (min-width: 320px) { ... }
      md: '375px',
      // => @media (min-width: 375px) { ... }
      lg: '768px',
      // => @media (min-width: 768px) { ... }
      //xl: '1024px',
      // => @media (min-width: 1024px) { ... }
      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      black: '#000',
      white: '#fff',
      //Svitlana
      's-gray': '#383838',
      's-purple': '#8f8ded',
      's-light-purple': '#bcbbf9',
      //Olga
      'olga-white-40': 'rgba(255, 255, 255, 0.4)',
      'olga-white-10': 'rgba(255, 255, 255, 0.1)',
      'olga-grey': '#6b6a6a',
      'olga-light-grey': '#a1a1a1',
      'olga-green': '#d3fd50',
      'olga-green-extra': '#c3ff0a',
      'olga-green-dark': '#283001',
      'olga-grey-60': 'rgba(107, 106, 106, 0.6)',
      'olga-bg': '#050706',
      'olga-btn-menu': '#1d1d1d',
      'olga-grid': '#1a1919',
    },
    fontWeight: {
      //Svitlana
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      xs: '12px',
      s: '14px',
      m: '16px',
      sm: '18px',
      md: '20px',
      l: '24px',
      lg: '32px',
      xl: '48px',
      '2xl': '64px',
      '3xl': '80px',
      '4xl': '86px',
    },
    extend: {
      backgroundImage: {
        grid: 'linear-gradient(90deg, rgba(107, 106, 106, 0.6) 1px, transparent 1px), linear-gradient(180deg, rgba(107, 106, 106, 0.6) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-90': '90px 90px',
        'grid-80': '80px 80px',
        'grid-20': '48px 48px',
        'grid-30': '30px 30px',
        'grid-40': '40px 40px',
        'grid-41': '41px 41px',
      },
      fontFamily: {
        'main-family': ['Roboto-Mono', 'ui-sans-serif', 'sans-serif'],
        'second-family': ['IBM Plex Mono', 'sans-serif'],
        'third-family': ['Inter', 'ui-sans-serif', 'sans-serif'],
        font3: ['VG5000', 'ui-sans-serif', 'sans-serif'],
        font4: ['Urbanist', 'ui-sans-serif', 'sans-serif'],
        font5: ['Nunito', 'ui-sans-serif', 'sans-serif'],
        font6: ['IBM Plex Sans', 'ui-sans-serif', 'sans-serif'],
        font7: ['Poppins', 'ui-sans-serif', 'sans-serif'],
        font8: ['Playfair Display', 'ui-sans-serif', 'sans-serif'],
        font9: ['Raleway', 'ui-sans-serif', 'sans-serif'],
        font10: ['Neucha', 'ui-sans-serif', 'sans-serif'],
      },

      letterSpacing: {
        //tracking-custom-tight
        'custom-tight': '0.02em',
      },
      lineHeight: {
        //leading-o-120
        's-24': '24px',
        's-27': '27px',
        's-30': '30px',
        's-38': '38px',
        's-48': '48px',
        's-120': '120px',
        's-129': '129px',
        'o-120': '120%',
        'o-130': '130%',
        'o-150': '150%',
      },

      boxShadow: {
        'olga-1': '0px 6.65px 5.32px 0px #8C898907',
        'olga-2': '0px 22.34px 17.87px 0px #8C89890B',
        'olga-3': '0px 100px 80px 0px #8C898912',
        'olga-combined':
          '0px 6.65px 5.32px 0px #8C898907, 0px 22.34px 17.87px 0px #8C89890B, 0px 100px 80px 0px #8C898912',
      },
      animation: {
        marqueeCustom:
          'marqueeCustom var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        marqueeCustom: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
