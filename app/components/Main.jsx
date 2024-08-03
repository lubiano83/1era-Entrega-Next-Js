"use client";
import React from 'react';
import LastAdded from './products/LastAdded';
import mockData from '../data/mockData';
import { useDarkMode } from '../hooks/useDarkMode';

const Main = () => {

  const { isDarkMode } = useDarkMode();

  return (
    <div className='flex flex-col justify-center items-center gap-8 w-full p-8'>
      <h1 className={`text-4xl font-bold underline ${isDarkMode ? "text-orange-600" : "text-blue-600"}`}>Bienvenidos a AutoShop!!</h1>
      <div className='border-2 border-gray-700 px-8 flex flex-col justify-center items-center pt-8 rounded-3xl w-full'>
        <h2 className='text-2xl'>Ultimos Productos Agregados:</h2>
        <LastAdded category={"all"} data={mockData}/>
      </div>
    </div>
  )
}; export default Main;
