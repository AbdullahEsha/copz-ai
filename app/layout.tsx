import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/redux/provider'

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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description as string} />
        <title>{metadata.title as string}</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
