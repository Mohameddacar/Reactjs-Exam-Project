import React from 'react'

const Call = ({number, Member, src}) => {
  return (
    <div className=''>
        <img src={src} alt="Call" />
        <h4 className='text-[36px] font-semibold'>{number}</h4>
        <p className='text-[16px] font-normal'> {Member}</p>
        
    </div>
  )
}

export default Call