import React from 'react'

const Card = ({ icon, heading, text }) => {
  return (
    <div
      className="w-[300px] bg-white rounded-2xl px-8 py-12 text-center shadow-[0px_4px_16px_rgba(0,0,0,0.06)] flex flex-col items-center"
    >
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-8">
        {icon}
      </div>
      <h3 className="text-[22px] font-semibold leading-[30px] text-gray-800 mb-4">
        {heading}
      </h3>
      <p className="text-[14px] leading-[22px] text-gray-500">
        {text}
      </p>
    </div>
  )
}

export default Card
