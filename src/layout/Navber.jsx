import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import Image from '../components/Image'
import logo from '../assets/logo.png'
const Navber = () => {
  return (
    <section className='pt-[30px]'>
        <Container>
            <Flex className="items-center">
                <div className='w-3/12'>
                <Image src={logo} alt="Logo" />
                </div>
                <div className='w-6/12'>
                 <ul className='flex gap-x-10'>
                    <List text="Home" />
                    <List text="Service" />
                    <List text="Feature" />
                    <List text="Projects" />
                    <List text="Testmonial" />
                    <List text="FAQ" />
                 </ul>
                </div>
                <div className='w-3/12'>
                <div className='gap-x-6 flex justify-end'>
                   <button className='text-[#4CAF4F] py-3 px-6 rounded-lg'>Login</button>
                   <button className='bg-[#4CAF4F] py-3 px-6 rounded-lg'>SignUp </button>
                </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navber