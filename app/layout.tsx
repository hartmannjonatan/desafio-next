import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import Navbar from './ui/navbar'

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
      <body>
        <Navbar />
        <div className="container md:px-20 px-10 md:py-10 py-5">
          {children}
        </div>
      </body>
    </html>
  )
}
