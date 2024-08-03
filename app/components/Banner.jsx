import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Banner = ({children}) => {

  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? 'bg-orange-400' : 'bg-blue-400'} p-4 w-full text-white font-bold flex justify-evenly items-center`}>{children}</div>
  )
}; export default Banner;
