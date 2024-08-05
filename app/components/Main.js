"use client";
import React from 'react';
import LastAdded from './products/LastAdded';
import mockData from '../data/mockData';
import { useDarkMode } from '../hooks/useDarkMode';
import Title from './Title';
import Button from './Button';
import Link from 'next/link';

const Main = () => {

  const { isDarkMode } = useDarkMode();

  return (
    <div className='flex flex-col justify-center items-center gap-8 w-full'>
      <Title styles={`text-4xl font-bold underline ${isDarkMode ? "text-orange-600" : "text-blue-600"} text-center px-4`}>Bienvenidos a AutoShop!!</Title>
      <Title styles='text-center text-gray-700 px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas pariatur maiores quasi repellat deleniti delectus quidem veniam, minima quis mollitia in beatae blanditiis ut cum aut inventore! Animi, quo. Excepturi doloribus itaque vel sapiente aperiam facilis laborum assumenda ex eveniet praesentium, rem accusantium nostrum quaerat consectetur! Praesentium, quibusdam dolor impedit hic suscipit quisquam porro vel voluptate necessitatibus aspernatur repellat.</Title>
      <div className='flex flex-col justify-center items-center rounded-3xl w-full gap-8'>
        <Title styles={`text-2xl font-bold ${isDarkMode ? "text-orange-600" : "text-blue-600"} flex flex-wrap px-4 text-center`}>Ultimos Productos Agregados:</Title>
        <LastAdded data={mockData}/>
      </div>
      <Title styles='text-center text-gray-700 px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas pariatur maiores quasi repellat deleniti delectus quidem veniam, minima quis mollitia in beatae blanditiis ut cum aut inventore! Animi, quo. Excepturi doloribus itaque vel sapiente aperiam facilis laborum assumenda ex eveniet praesentium, rem accusantium nostrum quaerat consectetur! Praesentium, quibusdam dolor impedit hic suscipit quisquam porro vel voluptate necessitatibus aspernatur repellat.</Title>
      <div className='flex items-center justify-center'>
        <Title styles={`text-2xl font-bold ${isDarkMode ? "text-orange-600" : "text-blue-600"} flex flex-wrap px-4 text-center`}>Visita Nuestra Tienda:</Title>
        <Link href={"/pages/products"}>
          <Button>Click Aqui!</Button>
        </Link>
      </div>
    </div>
  )
}; export default Main;
