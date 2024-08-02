import React from 'react'

const Button = ({children, handleClick}) => {
  return (
    <button onClick={handleClick} className="py-2 px-4 bg-blue-500 border rounded-lg text-white text-m hover:bg-white hover:text-blue-500 hover:border-blue-500">{children}</button>
  )
}; export default Button;
