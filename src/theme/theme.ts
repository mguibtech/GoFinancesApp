import {createTheme} from '@shopify/restyle';

const palette = {
  greenPrimary: '#00D09E',
  greenDark: '#093030',
  greenPrimaryLight: '#DFF7E2',
  greenPrimaryHoneydew: '#F1FFF3',
  greenSuccessLight: '#D8FFEC',

  lightBlue: '#6DB6FE',
  vividBlue: '#3299FF',
  oceanBlue: '#0068FF',

  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  cyprus: '#0E3E3E',
  FenceGreen: '#052224',
  void: '#031314',

  grayBlack: '#000000',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...palette,

    primary: palette.greenPrimary,
    primaryContrast: palette.grayBlack,

    buttonPrimary: palette.greenPrimary,

    background: palette.greenPrimaryHoneydew,
    backgroundContrast: palette.greenDark,

    error: palette.redError,
    errorLight: palette.redErrorLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
  },

  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
