import React from 'react';
import GoBack from './components/GoBack';

const NotFound = () => {
  return (
    <h1 className='h-full bg-white flex justify-center flex-col gap-4 items-center text-2xl text-gray-700'>
      Pagina no encontrada!!
      <GoBack />
    </h1>
  )
}; export default NotFound;
