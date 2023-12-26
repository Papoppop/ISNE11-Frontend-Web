"use client"
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="valentine">
      <head>
        <title>ISNE11</title>
        <meta name="description" content="ISNE11" />

        <meta name="keywords" content="ISNE11, ISNE, Information Systems and Network Engineering" />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="ISNE11" />

        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="500x500"
        />
      </head>
      <body className='vsc-initialized overflow-x-hidden'>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
