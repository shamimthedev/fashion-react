import React from 'react'

const Buttons = ({bText, className}) => {
  return (
    <button className={`${className}`}>{bText}</button>
  )
}

export default Buttons