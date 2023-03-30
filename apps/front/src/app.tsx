import React from 'react'
import { Test } from './pages/test'
import { RelayProvider } from './relay'
import { GlobalStyle } from './styles/global'

export const App = () => (
  <RelayProvider>
    <GlobalStyle />
    <Test />
  </RelayProvider>
)
