import React from 'react'
import { cn } from '../../../lib/utils'

const Flex = ({ children, className, ...props }) => {
  return (
    <div className={cn("flex", className)} {...props}>
      {children}
    </div>
  )
}

export default Flex