import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import banner from '../assets/banner.png'
const Banner = () => {
  return (
    <section className='pt-[96px] bg-[#F5F7FA] pb-[96px]'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                <h1 className='pl-2 text-[64px] font-semibold leading-[76px] w-[657px] pt-[65px]'>Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span></h1>
                <p className='pl-2 text-[#717171] font-nromal pt-4 pb-[32px]'>Where to grow your business as a photographer: site or social media?</p>
                <button className='pl-2 rounded-lg px-6 py-3 bg-[#4CAF4F] text-white font-bold'>Get Started</button>
                </div>
                <div className='w-1/2 flex justify-center'>
                <img src= {banner} alt="Banner Image" />
                
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner