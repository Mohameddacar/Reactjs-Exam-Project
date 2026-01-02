import React from 'react'
import Navber from '../layout/Navber'
import Banner from '../layout/Banner'
import Clients from '../components/Clients'
import Community from '../components/Community'
import About from '../components/About'
import CallAction from '../components/CallAction'
import Design from '../components/Design'
import Footer from '../layout/Footer'
import CallToAction from '../components/CallToAction'

const Home = () => {
  return (
    <div>
        <Navber />
        <Banner />
        <Clients />
        <Community />
        <About />
        <CallAction />
        <Design />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default Home