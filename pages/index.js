import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fargo Notary</title>
        <link rel="icon" href="/StampIcon.png" />
      </Head>

      <main>
        <Header title="Fargo Notary" />
        <p className="details">
          For Notary Needs: Text (818) 370-4234 or Email FargoNotary@yahoo.com 
        </p>
      </main>
  
      <body>
        <img src="nsa_member_badge.png" width="412" height="455"></img>
      </body>

      <Footer />
    </div>
  )
}
