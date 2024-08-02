import React from 'react';
import Title from '../Title';
import Horario from './Horario';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-full bg-blue-500 h-auto py-4 flex items-center justify-evenly gap-4 flex-wrap-reverse'>
      <Horario />
      <div className='flex gap-2'>
        <Image src={"/facebook-svgrepo-com.svg"} alt={"autoshop facebook"} height={30} width={30} className='cursor-pointer hover:scale-110' />
        <Image src={"/instagram-svgrepo-com.svg"} alt={"autoshop instagram"} height={30} width={30} className='cursor-pointer hover:scale-110' />
        <Image src={"/whatsapp-svgrepo-com.svg"} alt={"autoshop whatsapp"} height={30} width={30} className='cursor-pointer hover:scale-110' />
      </div>
      <Link href={"/"}>
        <Title styles={"font-bold text-4xl px-4 hover:text-gray-700"}>AutoShop</Title>
      </Link>
    </div>
  )
}; export default Footer;
