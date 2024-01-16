import type { Metadata } from 'next'
import '@/app/ui/globals.css'

export const metadata: Metadata = {
  title: 'JOJOS',
  description: 'Desafio Next - Pixel 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
