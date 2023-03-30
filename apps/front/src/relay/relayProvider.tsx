import React, { FC } from 'react'
import relayEnvironment from './relayEnv'
import { RelayEnvironmentProvider } from 'react-relay'

type RelayProviderTypes = {
  children: React.ReactNode
}

export const RelayProvider: FC<RelayProviderTypes> = ({ children }) => (
  <RelayEnvironmentProvider environment={relayEnvironment}>
    {children}
  </RelayEnvironmentProvider>
)
