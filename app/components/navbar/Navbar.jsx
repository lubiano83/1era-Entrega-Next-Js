"use client";
import React from 'react';
import Menu from './Menu';
import Title from '../Title';
import CartImage from './CartImage';
import Link from 'next/link';
import SwitchLight from './SwitchLight';
import { useDarkMode } from "../../hooks/useDarkMode";

const Navbar = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`bg-blue-600 flex justify-around items-center py-4 ${isDarkMode ? 'bg-orange-600' : 'bg-blue-600'}`}>
      <div className='flex gap-1'>
          <Menu isDarkMode={isDarkMode} />
          <Link href={"/"}>
            <Title styles={"font-bold text-4xl hover:text-gray-700"}>AutoShop</Title>
          </Link>
      </div>
        <SwitchLight toggleDarkMode={toggleDarkMode} />
        <Link href={"/pages/cart"}>
          <CartImage />
        </Link>
    </div>
  )
}; export default Navbar;
