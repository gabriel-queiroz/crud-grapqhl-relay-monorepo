import React from 'react'
import { RelayProvider } from './relay'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { MonorepoUIProvider } from '@monorepo/ui'

export const App = () => (
  <RelayProvider>
    <MonorepoUIProvider>
      <RouterProvider router={router} />
    </MonorepoUIProvider>
  </RelayProvider>
)
