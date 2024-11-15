import React from 'react'

const Flex = ({children, className}) => {
  return (
    <div className={`flex gap-2 ${className}`}>{children}</div>
  )
}

export default Flex