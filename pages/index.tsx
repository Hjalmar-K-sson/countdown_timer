import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header message="We're launching soon!" />
      <Footer />
    </div>
  )
}

export default Home
