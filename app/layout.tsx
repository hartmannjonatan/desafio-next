import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import Navbar from './ui/navbar'
import Footer from './ui/footer'

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
      <body className=''>
        <Navbar />
        <main className="container md:px-20 px-10 md:py-10 py-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
