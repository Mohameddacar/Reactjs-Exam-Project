import React from 'react'
import Container from './Container'
import aboutImage from '../assets/aboutImage.png'

const About = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex items-center gap-20">
          
          {/* Image */}
          <div className="w-1/2">
            <img
              src={aboutImage}
              alt="About illustration"
              className="w-full max-w-[445px]"
            />
          </div>

          {/* Content */}
          <div className="w-1/2">
            <h2 className="text-[36px] font-semibold leading-[44px] text-gray-800 mb-6">
              The unseen of spending three years at Pixelgrade
            </h2>

            <p className="text-[16px] leading-[24px] text-gray-500 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
              justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
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

export default About
