import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuList = ({ show, handleShow, isDarkMode }) => {

  const path = usePathname();
  const user = false;

  return (
    <div className={`${show ? "opacity-100 visible" : "opacity-0 invisible"} transition-all fixed inset-0 bg-black/50 flex justify-start z-20`}>
      <aside className={`${!show ? "translate-x-48" : ""} transition-all w-72 ${isDarkMode ? 'bg-orange-600' : 'bg-blue-600'}`}>
        <div  className='text-white text-right flex justify-end p-4 cursor-pointer text-3xl'>
          <div onClick={handleShow}>X</div>
        </div>
        <ul style={{ height: 'calc(100vh - 72px)' }} className='flex mt-4 flex-col gap-4 px-3 pb-4 justify-evenly text-center'>
          { user ? 
            <Link href={"/pages/admin"}><div className={`text-white p-2 hover:text-gray-700 font-bold ${path === "/pages/admin" ? "underline" : "no-underline"}`}>Admin</div></Link>
          : ""}
          <Link href={"/"}><div className={`text-white p-2 hover:text-gray-700 font-bold ${path === "/" ? "underline" : "no-underline"}`}>Inicio</div></Link>
          <Link href={"/pages/products"}><div className={`text-white p-2 hover:text-gray-700 font-bold ${path === "/pages/products" ? "underline" : "no-underline"}`} >Tienda</div></Link>
          <Link href={"/pages/login"}><div className={`text-white p-2 hover:text-gray-700 font-bold ${path === "/pages/login" ? "underline" : "no-underline"}`}>Login</div></Link>
          <Link href={"/pages/contacto"}><div className={`text-white p-2 hover:text-gray-700 font-bold ${path === "/pages/contacto" ? "underline" : "no-underline"}`}>Contacto</div></Link>
        </ul>
      </aside>
    </div>
  )
}; export default MenuList;
