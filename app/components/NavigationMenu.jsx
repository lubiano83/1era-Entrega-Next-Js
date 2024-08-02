"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationMenu = () => {

  const path = usePathname();

  return (
    <div className='p-4 text-white flex justify-evenly items-center flex-wrap bg-blue-300'>
      <Link href={"/pages/products"}><span className={`px-2 hover:text-gray-700 ${path === "/pages/products" ? "underline" : "no-underline"}`}>Todos</span></Link>
      <Link href={"/pages/products/aceites"}><span className={`px-2 hover:text-gray-700 ${path === "/pages/products/aceites" ? "underline" : "no-underline"}`}>Aceites</span></Link>
      <Link href={"/pages/products/aromatizantes"}><span className={`px-2 hover:text-gray-700 ${path === "/pages/products/aromatizantes" ? "underline" : "no-underline"}`}>Aromatizantes</span></Link>
      <Link href={"/pages/products/baterias"}><span className={`px-2 hover:text-gray-700 ${path === "/pages/products/baterias" ? "underline" : "no-underline"}`}>Baterias</span></Link>
      <Link href={"/pages/products/filtros"}><span className={`px-2 hover:text-gray-700 ${path === "/pages/products/filtros" ? "underline" : "no-underline"}`}>Filtros</span></Link>
      <Link href={"/pages/products/neumaticos"}><span className={`px-2 hover:text-gray-700 ${path === "/pages/products/neumaticos" ? "underline" : "no-underline"}`}>Neumaticos</span></Link>
    </div>
  )
}; export default NavigationMenu;
