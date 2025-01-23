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
      xl: '1024px',
      // => @media (min-width: 1024px) { ... }
      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      black: '#000',
      white: '#fff',
      //Svitlana
      's-gray': '#363535',
      's-purple': '#8f8ded',
      's-light-purple': '#bcbbf9',
      's-title-home': 'rgb(143, 141, 237)',
      's-soft-gray': '#4f4e4e', 
      's-plum': '#5a578c', 
      's-lavender': '#d7d6fc', 
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
      //font-medium
      light:'300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      //text-m
      xs: '12px',
      s: '14px',
      m: '16px',
      sm: '18px',
      md: '20px',
      l: '24px',
      lg: '32px',
      xlg: '42px',
      xl: '48px',
      '2xl': '64px',
      '3xl': '80px',
      '4xl': '86px',
    },
    extend: {
      spacing: {
        customLg: 'calc(100% - 320px)',
        custom2xl: 'calc(100% - 346px)',
        height2xl: 'calc(100vh - 107px)',
        heightLg: 'calc(100vh - 100px)',
        heightMobile: 'calc(100vh - 64px)',
        widthXl: 'calc(100% - 343px)',
      },
      left: {
        125: '125px',
        1143: '1143px',
      },
      backgroundImage: {
        grid: 'linear-gradient(90deg, rgba(107, 106, 106, 0.6) 1px, transparent 1px), linear-gradient(180deg, rgba(107, 106, 106, 0.6) 1px, transparent 1px)',

        'radial-gradient':
          'radial-gradient(circle, rgba(211,253,80,0.2) 22%, rgba(0, 0, 0, 0) 70%)',

        'radial-gradien':
          'radial-gradient(circle, rgba(211,253,80,0.1) 2%, rgba(0, 0, 0, 0) 70%)',
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
        //font-
        'main-family': [
          'var(--font-roboto-mono)',
          'ui-sans-serif',
          'sans-serif',
        ], // Olga
        'second-family': ['var(--font-ibm-plex-mono)', 'sans-serif'], // Svitlana
        'third-family': ['var(--font-inter)', 'ui-sans-serif', 'sans-serif'], //Svitlana
        //wo do not it any more?
        // font3: ['VG5000', 'ui-sans-serif', 'sans-serif'],
        font4: ['Nunito', 'ui-sans-serif', 'sans-serif'],
        // font5: ['IBM Plex Sans', 'ui-sans-serif', 'sans-serif'],
        // font6: ['Urbanist', 'ui-sans-serif', 'sans-serif'],
        // font7: ['Poppins', 'ui-sans-serif', 'sans-serif'],
        // font8: ['Playfair Display', 'ui-sans-serif', 'sans-serif'],
      },

      letterSpacing: {
        //tracking-custom-tight
        'custom-tight': '0.02em',
        's-1': '0.01em',
        's-2': '0.02em',
      },
      lineHeight: {
        //leading-o-120
        's-16': '16px',
        's-24': '24px',
        's-27': '27px',
        's-30': '30px',
        's-36': '36px',
        's-38': '38px',
        's-48': '48px',
        's-96': '96px',
        's-100': '100%',
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
        '3xl': 'inset 0 10px 10px -10px rgba(0, 0, 0, 0.3)',
      },
animation: {
        marqueeCustom:
          'marqueeCustom var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
          'meteor-effect': 'meteor 5s linear infinite',
          'result-tags_left': 'moveleft 6s ease-in infinite',
          'bubble-wobble': 'bubbleWobble 0.1s ease',
          'bubble-pop': 'bubblePop 5s ease',
          'wiggle': 'bubbleWiggle 0.4s 0s linear infinite none running',
      },
      keyframes: {
        marqueeCustom: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        moveleft: {
          '0%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-20%)' },
        },
        bubbleWobble: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '20%': { transform: 'scale(0.5)', opacity: '0.8' },
          '40%': { transform: 'scale(1.1)', opacity: '0.8' },
          '60%': { transform:'scale(.9)', opacity: '0.6' },
          '80%': { transform:'scale(.5)', opacity: '0.2' },
          '100%': { transform:'scale(0)', opacity: '0' },
        },
        bubbleWiggle: {
          '0%': { transform: 'rotate(0deg) translateX(0px) translateY(0px)' },
          '25%': { transform: 'rotate(1deg) translateX(0px) translateY(0px)' },
          '75%': { transform: '-rotate(1deg) -translateX(1px) -translateY(1px)' },
          '100%': { transform: 'rotate(0deg) translateX(0px) translateY(0px)' },
        },
        bubblePop: {
          '0%': { transform: 'translateY(0px)', opacity: '0' },
          '50%': { },
          '100%': { transform: 'translateY(-500px)', opacity: '1'},
        },
      },
      transitionDuration: {
          DEFAULT: '500ms',
          75: '75ms',
          100: '100ms',
          150: '150ms',
          200: '200ms',
          300: '300ms',
          500: '500ms',
          700: '700ms',
          1000: '1000ms',
          3000: '3000ms',
          5000: '5000ms',
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-fill-color': 'black',
          '-webkit-text-stroke': '1px #ffffff',
        },
      });
    },
  ],
};
export default config;
