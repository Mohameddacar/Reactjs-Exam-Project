import React from 'react'

const CallToAction = () => {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="max-w-[900px] mx-auto text-center px-6">
        <h2 className="text-[48px] font-semibold leading-[56px] text-gray-800 mb-8">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h2>

        <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition">
          Get a Demo
          <span>→</span>
        </button>
      </div>
    </section>
  )
}

export default CallToAction
