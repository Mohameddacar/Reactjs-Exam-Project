import React from 'react'
import Navber from '../layout/Navber'
import Banner from '../layout/Banner'
import Clients from '../components/Clients'
import Community from '../components/Community'
import About from '../components/About'

const Home = () => {
  return (
    <div>
        <Navber />
        <Banner />
        <Clients />
        <Community />
        <About />
    </div>
  )
}

export default Home