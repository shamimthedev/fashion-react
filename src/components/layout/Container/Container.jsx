import React from 'react'
import { cn } from '../../../lib/utils'

const Container = ({ className, children }) => {
  return (
    <div className={cn(`mx-auto px-4 sm:px-6 lg:px-8`, className)}>{children}</div>
  )
}

export default Container