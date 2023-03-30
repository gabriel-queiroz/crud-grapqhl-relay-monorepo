import React from 'react'
import { RelayProvider } from './relay'
import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

export const App = () => (
  <RelayProvider>
    <GlobalStyle />
    <RouterProvider router={router} />
  </RelayProvider>
)
