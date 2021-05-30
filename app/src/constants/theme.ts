import { ColorSchemeName } from 'react-native'
import { DefaultTheme } from 'styled-components/native'
import { css } from 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const brandColor = '#3178B6'
export const darkTheme: DefaultTheme = {
  mode: 'dark',
  primaryBackgroundColor: 'black',
  secondaryBackgroundColor: '#424242',
  primaryTextColor: '#cfd5e8',
  secondaryTextColor: 'rgba(255, 255, 255, 0.7)',
  primaryButtonColor: brandColor,
  secondaryButtonColor: '#506680',
}
export const lightTheme: DefaultTheme = {
  mode: 'light',
  primaryBackgroundColor: '#e8e8e8',
  // primaryBackgroundColor: '#fafafa',
  secondaryBackgroundColor: '#fff',
  primaryTextColor: 'rgba(0, 0, 0, 0.87)',
  secondaryTextColor: 'rgba(0, 0, 0, 0.54)',
  primaryButtonColor: brandColor,
  secondaryButtonColor: '#a1c9f1',
}

export const themeMap: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
}

interface Theme {
  mode: ColorSchemeName
  primaryBackgroundColor: string
  secondaryBackgroundColor: string
  primaryTextColor: string
  secondaryTextColor: string
  primaryButtonColor: string
  secondaryButtonColor: string
}

/** CSS snippet for making the background properly colored */
export const themeView = css`
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
  color: ${({ theme }) => theme.primaryTextColor};
`

/** CSS snippet for making the background properly colored */
export const themeText = css`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 16px;
`

export const boldFont = css`
  font-family: 'Avenir-Heavy';
`
export const regularFont = css`
  font-family: 'Avenir';
`
