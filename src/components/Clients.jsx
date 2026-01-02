import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
const Clients = () => {
  return (
    <section className='py-[40px]'>
       <Container>
         <div className=''>
            <h2 className='text-[36px] font-semibold leading-[42px] text-center'>Our Clients</h2>
            <p className='text-4 font-regular text-center pt-2'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div>
            <ul className='flex justify-center gap-x-[136px] pt-[41px]'>
                <li>
                    <img src={c1} alt="Client 1" />
                </li>
                <li>
                    <img src={c2} alt="Client 2" />
                </li>
                <li>
                    <img src={c3} alt="Client 3" />
                </li>
                <li>
                    <img src={c4} alt="Client 4" />
                </li>
                <li>
                    <img src={c5} alt="Client 5" />
                </li>
                <li>
                    <img src={c6} alt="Client 6" />
                </li>
            </ul>
        </div>
       </Container>
    </section>
  )
}

export default Clients