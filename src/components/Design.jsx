
import React from 'react'
import Container from './Container'
import pana from '../assets/pana.png'

const Design = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex items-center gap-20">
          
          {/* Image */}
          <div className="w-1/2">
            <img
              src={pana}
              alt="About illustration"
              className="w-full max-w-[445px]"
            />
          </div>

          {/* Content */}
          <div className="w-1/2">
            <h2 className="text-[36px] font-semibold leading-[44px] text-gray-800 mb-6">
              How to design your site footer like we did
            </h2>

            <p className="text-[16px] leading-[24px] text-gray-500 mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>

            <button className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Learn More
            </button>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Design
