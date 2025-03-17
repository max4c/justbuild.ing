import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title = 'justbuild.ing' }) {
  return (
    <>
      <Head>
        {/* Ensure title is a single text node */}
        <title key="title">{title}</title>
        <meta name="description" content="A community for top builders to elevate each other" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow max-w-3xl mx-auto px-4 py-8 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
