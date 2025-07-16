import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Model United Nations',
  keywords: ['Model United Nations', 'GIIS MUN', 'Global Indian International School', 'GIIS', 'MUN'],
  description: 'Connecting students globally through Model United Nations at GIIS.',
  generator: 'GIIS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
