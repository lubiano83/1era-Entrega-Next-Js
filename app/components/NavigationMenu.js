"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Banner from './Banner';
import { useParams } from 'next/navigation';
import { useDarkMode } from '../hooks/useDarkMode';

const NavigationMenu = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const path = usePathname();
  const { category = "todos", brand = "todos" } = useParams();
  const { isDarkMode } = useDarkMode();

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsBrandOpen(false); // Cierra el dropdown de marcas cuando se abre el de categorías
  };

  const toggleBrandDropdown = () => {
    setIsBrandOpen(!isBrandOpen);
    setIsCategoryOpen(false); // Cierra el dropdown de categorías cuando se abre el de marcas
  };

  const closeDropdowns = () => {
    setIsCategoryOpen(false);
    setIsBrandOpen(false);
  };

  return (
    <Banner>
      <div className="flex gap-2 w-full justify-evenly flex-wrap">
        <div className="relative">
          <button
            onClick={toggleCategoryDropdown}
            className={`px-4 py-2 text-white hover:text-gray-700 font-bold rounded-md focus:outline-none`}
          >
            Categorías
          </button>
          {isCategoryOpen && (
            <div className={`absolute mt-2 w-48 z-10 rounded-md shadow-lg ${isDarkMode ? "bg-orange-400" : "bg-blue-400"} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link href="/pages/products">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products" ? "underline" : "no-underline"}`} role="menuitem">
                    Todos
                  </span>
                </Link>
                <Link href="/pages/products/aceites">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/aceites" ? "underline" : "no-underline"}`} role="menuitem">
                    Aceites
                  </span>
                </Link>
                <Link href="/pages/products/aromatizantes">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/aromatizantes" ? "underline" : "no-underline"}`} role="menuitem">
                    Aromatizantes
                  </span>
                </Link>
                <Link href="/pages/products/baterias">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/baterias" ? "underline" : "no-underline"}`} role="menuitem">
                    Baterias
                  </span>
                </Link>
                <Link href="/pages/products/filtros">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/filtros" ? "underline" : "no-underline"}`} role="menuitem">
                    Filtros
                  </span>
                </Link>
                <Link href="/pages/products/neumaticos">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/neumaticos" ? "underline" : "no-underline"}`} role="menuitem">
                    Neumáticos
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={toggleBrandDropdown}
            className={`px-4 py-2 text-white hover:text-gray-700  font-bold rounded-md focus:outline-none`}
          >
            Marcas
          </button>
          {isBrandOpen && (
            <div className={`absolute mt-2 z-10 w-48 rounded-md shadow-lg ${isDarkMode ? "bg-orange-400" : "bg-blue-400"} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {category !== "todos" || category === "todos" ?
              <Link href={`/pages/products/${category}/todos`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/todos` ? "underline" : "no-underline"}`} role="menuitem">
                    Todos
                  </span>
                </Link> : ""}
                {category === "todos" || category === "neumaticos" || category === "baterias" ?
                <Link href={`/pages/products/${category}/hankook`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/hankook` ? "underline" : "no-underline"}`} role="menuitem">
                    Hankook
                  </span>
                </Link> : ""}
                {category === "todos" || category === "filtros" ?
                <Link href={`/pages/products/${category}/mann`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/mann` ? "underline" : "no-underline"}`} role="menuitem">
                    Mann
                  </span>
                </Link>  : ""}
                {category === "todos" || category === "aromatizantes" ?
                <Link href={`/pages/products/${category}/paloma`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/paloma` ? "underline" : "no-underline"}`} role="menuitem">
                    Paloma
                  </span>
                </Link> : ""}
                {category === "todos" || category === "aceites" ?
                <Link href={`/pages/products/${category}/shell`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/shell` ? "underline" : "no-underline"}`} role="menuitem">
                    Shell
                  </span>
                </Link> : ""}
              </div>
            </div>
          )}
        </div>
      </div>
    </Banner>
  );
}; export default NavigationMenu;
