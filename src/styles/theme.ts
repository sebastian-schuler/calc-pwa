import { DefaultMantineColor, MantineThemeOverride, Tuple } from '@mantine/core';

const appTheme: MantineThemeOverride = {

  colors: {
    primary: ['#FFF4E5', '#FFE0B8', '#FFCC8A', '#FFB95C', '#FFA52E', '#FF9100', '#CC7400', '#995700', '#663A00', '#331D00'],
  },

  white: '#F2F4F8',
  black: '#1A1A1A',
  primaryColor: 'primary',
  primaryShade: 4,

  fontFamily: 'roboto, arial, sans-serif',
  fontSizes: {
    xs: '0.625rem',
    sm: '0.75rem',
    md: '0.875rem',
    lg: '1rem',
    xl: '1.25rem',
  },

  defaultRadius: "md",

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },

  breakpoints: {
    xs: '36rem',
    sm: '48rem',
    md: '64rem',
    lg: '75rem',
    xl: '88rem',
  },

  components: {
  },

  headings: {
    fontFamily: 'roboto, arial, sans-serif',
    sizes: {
      h1: {
        fontSize: '3.3em',
        fontWeight: 700,
        lineHeight: 1.1,
      },
      h2: {
        fontSize: '2.5em',
        fontWeight: 700,
        lineHeight: 1.1,
      },
      h3: {
        fontSize: '2.0em',
        fontWeight: 700,
        lineHeight: 1.1,
      },
      h4: {
        fontSize: '1.7em',
        fontWeight: 700,
        lineHeight: 1.1,
      },
      h5: {
        fontSize: '1.5em',
        fontWeight: 600,
        lineHeight: 1.1,
      },
      h6: {
        fontSize: '1.3em',
        fontWeight: 500,
        lineHeight: 1.1,
      },
    }
  }
};

type ExtendedCustomColors = 'primary' | 'dark' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

export default appTheme;