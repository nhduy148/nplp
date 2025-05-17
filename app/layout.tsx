import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexPOS',
  description: 'NexPOS',
  generator: 'NexPOS',
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
