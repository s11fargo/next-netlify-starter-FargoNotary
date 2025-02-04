import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fargo Software</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fargo Notary" />
        <p className="details">
          For Notary Needs Text (818) 370-4234 or Email: FargoNotary@yahoo.com 
        </p>
      </main>
  
      <body>
        <img src="Software.jpg" width="600" height="400"></img>
      </body>

      <Footer />
    </div>
  )
}
