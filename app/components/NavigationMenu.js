"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Banner from './Banner';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NavigationMenu = () => {

  const path = usePathname();
  const router = useRouter();

  return (
      <Banner>
        <Image src={"/arrow-sm-left-svgrepo-com.svg"} alt={"autoshop arrowback"} height={45} onClick={() => router.back()} width={45} />
        <Link href={"/pages/products"}><span className={`px-2 hover:text-gray-700 font-bold ${path === "/pages/products" ? "underline" : "no-underline"}`}>Todos</span></Link>
        <Link href={"/pages/products/aceites"}><span className={`px-2 hover:text-gray-700 font-bold ${path === "/pages/products/aceites" ? "underline" : "no-underline"}`}>Aceites</span></Link>
        <Link href={"/pages/products/aromatizantes"}><span className={`px-2 hover:text-gray-700 font-bold ${path === "/pages/products/aromatizantes" ? "underline" : "no-underline"}`}>Aromatizantes</span></Link>
        <Link href={"/pages/products/baterias"}><span className={`px-2 hover:text-gray-700 font-bold ${path === "/pages/products/baterias" ? "underline" : "no-underline"}`}>Baterias</span></Link>
        <Link href={"/pages/products/filtros"}><span className={`px-2 hover:text-gray-700 font-bold ${path === "/pages/products/filtros" ? "underline" : "no-underline"}`}>Filtros</span></Link>
        <Link href={"/pages/products/neumaticos"}><span className={`px-2 hover:text-gray-700 font-bold ${path === "/pages/products/neumaticos" ? "underline" : "no-underline"}`}>Neumaticos</span></Link>
        <Image src={"/arrow-sm-right-svgrepo-com.svg"} alt={"autoshop arrowfoward"} height={45} width={45} onClick={() => router.forward()}/>
      </Banner>
  )
}; export default NavigationMenu;
