import React, { Suspense } from 'react'
import { NavigationContainer, Theme } from '@react-navigation/native'
import { Appearance, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { RecoilRoot } from 'recoil'
import { PortalProvider } from '@gorhom/portal'

import Router from '@/router'
import { themeMap } from '@/constants/theme'

const App = () => {
  const colorScheme = Appearance.getColorScheme()
  const theme = themeMap?.[colorScheme || 'dark']
  const navTheme: Theme = {
    dark: colorScheme === 'dark',
    colors: {
      background: theme.primaryTextColor,
      primary: theme.primaryTextColor,
      text: theme.primaryTextColor,
      card: theme.secondaryBackgroundColor,
      border: theme.primaryTextColor,
      notification: 'red',
    },
  }

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navTheme}>
          <Suspense fallback={<View />}>
            <PortalProvider>
              <Router />
            </PortalProvider>
          </Suspense>
        </NavigationContainer>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
