import React from 'react';
import Link from 'next/link';

const BrandFilters = ({toggleBrandDropdown, isBrandOpen, closeDropdowns, isDarkMode, path, category}) => {

  return (
    <div className="relative">
          <button
            onClick={toggleBrandDropdown}
            className={`text-white hover:text-gray-700  font-bold rounded-md focus:outline-none`}
          >
            Marcas
          </button>
          {isBrandOpen && (
            <div className={`absolute mt-2 z-10 w-36 rounded-md shadow-lg ${isDarkMode ? "bg-orange-400" : "bg-blue-400"} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {category !== "todos" || category === "todos" ?
              <Link href={`/pages/products/${category}`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}` ? "underline" : "no-underline"}`} role="menuitem">
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
  )
}; export default BrandFilters;