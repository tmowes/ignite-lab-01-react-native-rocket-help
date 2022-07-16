import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    green_300: '#04D361',
    green_500: '#00B37E',
    green_700: '#00875F',
    primary_700: '#996DFF',
    secondary_700: '#FBA94C',
    gray_700: '#121214', // (background)
    gray_600: '#202024', // (shape principal)
    gray_500: '#29292E', // (shape secundaria)
    gray_400: '#323238', // (shape terciária)
    gray_300: '#7C7C8A', // (placeholder)
    gray_200: '#C4C4CC', // (texto base)
    gray_100: '#E1E1E6', // (títulos)
  },
  fonts: {
    heading: 'Roboto-Medium',
    body: 'Roboto-Regular',
  },
  config: {
    initialColorMode: 'dark',
  },
})

type CustomThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
