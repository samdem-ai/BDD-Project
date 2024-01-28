'use client'
import { parseCookies } from 'nookies'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProviderAuth({ children }: { children: ReactNode }) {
  const { token } = parseCookies()
  const router = useRouter()
  // useEffect(() => {
  //   if (token !== process.env.NEXT_PUBLIC_SECRET_KEY) {
  //     router.push('/')
  //   }
  // }, [])
  return <div>{children}</div>
}
