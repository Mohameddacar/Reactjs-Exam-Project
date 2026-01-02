import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Call from './Call'
import Image from './Image' 
import calls from '../assets/calls.png'

const CallAction = () => {
  return (
    <section className='pt-[96px] pb-[96px] bg-[#F5F7FA]'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                <h2 className='pt-8 text-[36px] font-semibold leading-[42px]'>Helping a local <br /> <span className='text-[#4CAF4F]'>business reinvent itself</span></h2>
                <p className='text-[16px] font-nromal leading-[24px] pt-4'>We reached here with our hard work and dedication</p>
                </div>
                <div className='w-1/2'>
                <img src={calls} alt="Call Action" />

                </div>
            </Flex>
        </Container>

    </section>
  )
}

export default CallAction