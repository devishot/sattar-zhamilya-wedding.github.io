import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Свадьба: Саттар и Жамиля',
  description: 'Приглашение на свадьбу Саттара и Жамили, 31 Августа 2025'
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
