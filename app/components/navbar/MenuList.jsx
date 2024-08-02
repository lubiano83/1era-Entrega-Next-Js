import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuList = ({ open, handleOpen }) => {

  const path = usePathname();

  return (
    <div className={`${open ? "opacity-100 visible" : "opacity-0 invisible"} transition-all fixed inset-0 bg-black/50 flex justify-start`}>
      <aside className={`${!open ? "translate-x-48" : ""} transition-all w-80 bg-blue-500`}>
        <div onClick={handleOpen} className='text-white text-right p-4 cursor-pointer text-3xl'>X</div>
        <ul style={{ height: 'calc(100vh - 72px)' }} className='flex mt-4 flex-col gap-4 px-3 pb-4 justify-evenly text-center'>
          <Link href={"/"}><div className={`text-white p-2 hover:text-gray-700 font-bold ${path === "/" ? "underline" : "no-underline"}`}>Inicio</div></Link>
          <Link href={"/pages/products"}><div className={`text-white p-2 hover:text-gray-700 font-bold ${path === "/pages/products" ? "underline" : "no-underline"}`} >Tienda</div></Link>
          <Link href={"/pages/cart"}><div className={`text-white p-2 hover:text-gray-700 font-bold ${path === "/pages/cart" ? "underline" : "no-underline"}`}>Carrito</div></Link>
          <Link href={"/pages/admin"}><div className={`text-white p-2 hover:text-gray-700 font-bold ${path === "/pages/admin" ? "underline" : "no-underline"}`}>Admin</div></Link>
        </ul>
      </aside>
    </div>
  )
}; export default MenuList;
