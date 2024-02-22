import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Copz-Ai',
  description: 'Facebook Post',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
