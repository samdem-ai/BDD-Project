import { ReactNode } from 'react'
import ProviderAuth from './ProviderAuth'

export default function RootLayout({ children }: { children: ReactNode }) {
  return <ProviderAuth>{children}</ProviderAuth>
}
