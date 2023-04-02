import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { GlobalStyle } from '../Layout/Global'

type MonorepoUIProviderProps = {
  children: React.ReactNode
}

export const MonorepoUIProvider: React.FC<MonorepoUIProviderProps> = ({
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
