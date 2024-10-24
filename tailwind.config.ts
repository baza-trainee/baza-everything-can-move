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
        lg: '32px',
        xl: '64px',
        '2xl': '120px',
      },
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
    extend: {
      fontFamily: {
        'main-family': ['Roboto', 'ui-sans-serif', 'sans-serif'],
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
      screens: {
        sm: '320px',
        // => @media (min-width: 320px) { ... }
        md: '375px',
        // => @media (min-width: 375px) { ... }
        lg: '744px',
        // => @media (min-width: 744px) { ... }
        xl: '1024px',
        // => @media (min-width: 1024px) { ... }
        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      letterSpacing: {
        //tracking-custom-tight
        'custom-tight': '0.02em',
      },
      lineHeight: {
        //leading-custom-24
        's-24': '24px',
        's-27': '27px',
        's-30': '30px',
        's-38': '38px',
        's-48': '48px',
        's-120': '120px',
        's-129': '129px',
        'o-130': '130%',
        'o-150': '150%',
      },
      fontWeight: {
        //Svitlana
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        // xs: '12px',
        s: '14px',
        m: '16px',
        sm: '18px',
        md: '20px',
        l: '24px',
        lg: '32px',
        xl: '48px',
        ' 2xl': '64px',
        '3xl': '80px',
        '4xl': '86px',
      },
    },
  },
  plugins: [],
};
export default config;
