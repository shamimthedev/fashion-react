import React from 'react'
import { cn } from '../../../lib/utils'

const Heading = ({ 
  as: Component = 'h2', 
  text, 
  className,
  children,
  ...props 
}) => {
  const baseStyles = 'font-display font-semibold tracking-tight text-neutral-900'
  
  const sizeStyles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-3xl md:text-4xl lg:text-5xl',
    h3: 'text-2xl md:text-3xl lg:text-4xl',
    h4: 'text-xl md:text-2xl',
    h5: 'text-lg md:text-xl',
    h6: 'text-base md:text-lg',
    p: 'text-base font-normal text-neutral-600'
  }

  return (
    <Component 
      className={cn(
        baseStyles,
        sizeStyles[Component] || sizeStyles.p,
        className
      )}
      {...props}
    >
      {children || text}
    </Component>
  )
}

export default Heading