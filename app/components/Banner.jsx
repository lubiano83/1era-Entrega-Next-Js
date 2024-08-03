import React from 'react'

const Banner = ({children}) => {
  return (
    <div className='bg-blue-300 p-4 w-full text-white font-bold flex justify-evenly items-center'>{children}</div>
  )
}; export default Banner;
