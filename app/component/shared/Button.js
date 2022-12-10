
import React from 'react'

const Button = ({className, title, ...res}) => {
  return (
    <div className={`bg-primary font-bold px-6 ronded flex items-center cursor-pointer ${className}`} {...res}>{title}</div>
  )
}

export default Button