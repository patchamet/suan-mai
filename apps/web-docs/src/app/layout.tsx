import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suan Mai - API Documentation',
  description: 'API documentation for Suan Mai data garden',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <h1 className="text-xl font-semibold">Suan Mai API Docs</h1>
                <div className="flex space-x-4">
                  <a href="/" className="text-gray-600 hover:text-gray-900">Overview</a>
                  <a href="/graphql" className="text-gray-600 hover:text-gray-900">GraphQL</a>
                  <a href="/rest" className="text-gray-600 hover:text-gray-900">REST API</a>
                  <a href="/examples" className="text-gray-600 hover:text-gray-900">Examples</a>
                </div>
              </div>
            </div>
          </nav>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
