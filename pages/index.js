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
          For Notary Needs: Text (818) 370-4234 or Email FargoNotary@yahoo.com 
        </p>
      </main>
  
      <body>
    <a href="https://www.nationalnotary.org/knowledge-center/signing-agent-resources"
target="_blank"><img src="https://www.nationalnotary.org/Image%20Library/NNA/membership%
20images/nsa_member_badge.png" alt="Certified Notary Signing Agent" width="100" height="100"
border="0" title="Certified Notary Signing Agent" /></a>
        <img src="nsa_member_badge.png" width="412" height="455"></img>
      </body>

      <Footer />
    </div>
  )
}
