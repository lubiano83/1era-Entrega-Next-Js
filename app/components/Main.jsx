"use client";
import React from 'react';
import LastAdded from './products/LastAdded';
import mockData from '../data/mockData';
import { useDarkMode } from '../hooks/useDarkMode';

const Main = () => {

  const { isDarkMode } = useDarkMode();

  return (
    <div className='flex flex-col justify-center items-center gap-8 w-full'>
      <h1 className={`text-4xl font-bold underline ${isDarkMode ? "text-orange-600" : "text-blue-600"} text-center px-4`}>Bienvenidos a AutoShop!!</h1>
      <h3 className='text-center text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas pariatur maiores quasi repellat deleniti delectus quidem veniam, minima quis mollitia in beatae blanditiis ut cum aut inventore! Animi, quo. Excepturi doloribus itaque vel sapiente aperiam facilis laborum assumenda ex eveniet praesentium, rem accusantium nostrum quaerat consectetur! Praesentium, quibusdam dolor impedit hic suscipit quisquam porro vel voluptate necessitatibus aspernatur repellat.</h3>
      <div className='flex flex-col justify-center items-center rounded-3xl w-full'>
        <h2 className={`text-2xl font-bold ${isDarkMode ? "text-orange-600" : "text-blue-600"} flex flex-wrap px-4 text-center`}>Ultimos Productos Agregados:</h2>
        <LastAdded data={mockData}/>
      </div>
    </div>
  )
}; export default Main;
