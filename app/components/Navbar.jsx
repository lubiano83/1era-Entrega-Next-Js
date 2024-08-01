import React from 'react';
import Menu from './Menu';
import Title from './Title';
import CartImage from './CartImage';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-blue-500 flex justify-around items-center py-4'>
      <div className='flex gap-1'>
          <Menu />
          <Link href={"/"}>
            <Title styles={"font-bold text-4xl hover:text-gray-700"}>AutoShop</Title>
          </Link>
      </div>
        <Link href={"/Cart"}>
          <CartImage />
        </Link>
    </div>
  )
}; export default Navbar;
