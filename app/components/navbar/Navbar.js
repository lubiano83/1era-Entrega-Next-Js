"use client";
import React from 'react';
import Menu from './Menu';
import Logo from '../Logo';
import CartImage from './CartImage';
import Link from 'next/link';
import SwitchLight from './SwitchLight';
import { useDarkMode } from "../../hooks/useDarkMode";

const Navbar = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`bg-blue-600 flex justify-around px-4 items-center py-4 ${isDarkMode ? 'bg-orange-600' : 'bg-blue-600'}`}>
      <div className='flex gap-1'>
          <Menu isDarkMode={isDarkMode} />
          <Link href={"/"}>
            <Logo />
          </Link>
      </div>
        <SwitchLight toggleDarkMode={toggleDarkMode} />
        <Link href={"/pages/cart"}>
          <CartImage />
        </Link>
    </div>
  )
}; export default Navbar;
