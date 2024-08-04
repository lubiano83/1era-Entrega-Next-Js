"use client";
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Banner = ({children}) => {

  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? 'bg-orange-400' : 'bg-blue-400'} py-2 px-8 w-full text-white font-bold flex justify-between items-center flex-wrap`}>
        {children}
    </div>
  )
}; export default Banner;
