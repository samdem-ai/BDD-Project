import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JobsDev GO',
  description: 'Project Open Source for Developers find jobs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-zinc-200 min-h-screen bg-zinc-950">
        <div className="mx-auto w-full container ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
