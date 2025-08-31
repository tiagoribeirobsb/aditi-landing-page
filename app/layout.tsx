
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Aditi Digital Experts | Transformação Digital e Inteligência Artificial',
  description: 'Ecossistema de soluções digitais integradas. Combinamos inteligência artificial, expertise em vendas e marketing digital para jornada completa de crescimento.',
  keywords: 'transformação digital, inteligência artificial, automação, marketing digital, vendas, Brasil',
  authors: [{ name: 'Aditi Digital Experts' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Aditi Digital Experts | Ecossistema de Inteligência Digital',
    description: 'Ecossistema de soluções digitais integradas com resultados concretos e sustentáveis.',
    type: 'website',
    locale: 'pt_BR',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
