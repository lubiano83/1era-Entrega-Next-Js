"use client";
import React from 'react'
import Button from '@/app/components/Button';
import Title from '@/app/components/Title';
import { useDarkMode } from '@/app/hooks/useDarkMode';

const Login = () => {

    const { isDarkMode } = useDarkMode();

  return (
    <div className="bg-white flex flex-col justify-center gap-4 items-center h-full w-full">
        <Title styles={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-2xl font-bold`}>Login:</Title>
      <input type="text" name="text" placeholder='Ingrese su eMail..' className='w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700'/>
      <input type="text" name="text" placeholder='Ingrese su Password..' className='w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700'/>
      <div className='flex justify-center items-center gap-2'>
        <Button>Registrar</Button>
        <Button>Ingresar</Button>
      </div>
    </div>
  )
}; export default Login;
