import React from 'react';
import Title from '../Title';
import Horario from './Horario';
import Link from 'next/link';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <div className='w-full bg-blue-500 h-auto py-4 flex items-center justify-evenly gap-4 flex-wrap-reverse'>
      <Horario />
      <SocialMedia />
      <Link href={"/"}>
        <Title styles={"font-bold text-4xl px-4 hover:text-gray-700"}>AutoShop</Title>
      </Link>
    </div>
  )
}; export default Footer;
