import './globals.css'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from './apollo-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suan Mai - Admin Panel',
  description: 'Admin panel for Suan Mai data garden',
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
          <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm border-b">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                  <h1 className="text-xl font-semibold">Suan Mai Admin</h1>
                  <div className="flex space-x-4">
                    <a href="/" className="text-gray-600 hover:text-gray-900">Dashboard</a>
                    <a href="/users" className="text-gray-600 hover:text-gray-900">Users</a>
                    <a href="/schemas" className="text-gray-600 hover:text-gray-900">Schemas</a>
                    <a href="/data" className="text-gray-600 hover:text-gray-900">Data</a>
                  </div>
                </div>
              </div>
            </nav>
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </ApolloWrapper>
      </body>
    </html>
  )
}
