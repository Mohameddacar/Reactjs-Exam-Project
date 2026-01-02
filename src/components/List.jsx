import React from 'react'

const List = ({text,className}) => {
  return (
    <div className={`text-lg font-dm font-normal  ${className}`}>{text}</div>
  )
}

export default List