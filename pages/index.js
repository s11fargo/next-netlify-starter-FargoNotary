import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fargo Notary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fargo Notary" />
        <p className="details">
          For Notary Needs in Los Angeles, CA
        </p>
        <p className="details">
          Text: (818) 370-4234 or Email: FargoNotary@yahoo.com 
        </p>
      </main>
  
      <body>
        <img src="nsa_member_badge.png" width="334" height="369"></img>
      </body>

      <Footer />
    </div>
  )
}
