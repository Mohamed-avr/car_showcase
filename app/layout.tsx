import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@/components'



export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the cars you have never seen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
      <body className='relative' >
          <Navbar/>
          {children}
         <Footer/>
      </body>
     
    </html>
  )
}
