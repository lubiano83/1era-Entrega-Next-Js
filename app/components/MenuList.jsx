import React from 'react'
import Link from 'next/link';

const MenuList = ({ open, handleOpen }) => {
  return (
    <div className={`${open ? "opacity-100 visible" : "opacity-0 invisible"} transition-all fixed inset-0 bg-black/50 flex justify-start`}>
      <aside className={`${!open ? "translate-x-48" : ""} transition-all w-80 bg-blue-500`}>
        <div onClick={handleOpen} className='text-white text-right p-4 cursor-pointer text-3xl'>X</div>
        <ul style={{ height: 'calc(100vh - 72px)' }} className='flex mt-4 flex-col gap-4 px-3 pb-4 justify-evenly text-center'>
          <Link href={"/"}><div className='text-white p-2 hover:text-gray-700 font-bold'>Inicio</div></Link>
          <Link href={"/Nosotros"}><div className='text-white p-2 hover:text-gray-700 font-bold'>Nosotros</div></Link>
          <Link href={"/Sucursales"}><div className='text-white p-2 hover:text-gray-700 font-bold'>Sucursales</div></Link>
          <Link href={"/Contacto"}><div className='text-white p-2 hover:text-gray-700 font-bold'>Contacto</div></Link>
        </ul>
      </aside>
    </div>
  )
}; export default MenuList;
