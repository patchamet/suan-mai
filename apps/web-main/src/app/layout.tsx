import './globals.css'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from './apollo-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suan Mai - Main App',
  description: 'Main application for Suan Mai data garden',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  )
}
