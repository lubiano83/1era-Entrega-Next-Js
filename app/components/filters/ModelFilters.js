import React from 'react';
import Link from 'next/link';

const ModelFilters = ({toggleModelDropdown, isModelOpen, closeDropdowns, isDarkMode, path, brand, category}) => {

  return (
    <div className="relative">
          <button
            onClick={toggleModelDropdown}
            className={`text-white hover:text-gray-700 font-bold rounded-md focus:outline-none h-auto max-h-72 scroll-my-1`}
          >
            Modelos
          </button>
          {isModelOpen && (
            <div className={`absolute mt-2 z-10 w-36 rounded-md shadow-lg ${isDarkMode ? "bg-orange-400" : "bg-blue-400"} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {category === "todos" || category !== "todos" || brand === "todos" || brand !== "todos" ?
              <Link href={`/pages/products/${category}/${brand}`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}` ? "underline" : "no-underline"}`} role="menuitem">
                    Todos
                  </span>
                </Link> : ""}
                {(category === "aceites" && brand === "shell") ?
                <Link href={`/pages/products/${category}/${brand}/5W-30`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/5W-30` ? "underline" : "no-underline"}`} role="menuitem">
                    5W-30
                  </span>
                </Link> : ""}
                {(category === "aceites" && brand === "shell") ?
                <Link href={`/pages/products/${category}/${brand}/10W-40`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/10W-40` ? "underline" : "no-underline"}`} role="menuitem">
                    10W-40
                  </span>
                </Link> : ""}
                {(category === "aceites" && brand === "shell") ?
                <Link href={`/pages/products/${category}/${brand}/15W-40`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/15W-40` ? "underline" : "no-underline"}`} role="menuitem">
                    15W-40
                  </span>
                </Link> : ""}
                {(category === "aromatizantes" && brand === "paloma") ?
                <Link href={`/pages/products/${category}/${brand}/Happy-Bag`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/Happy-Bag` ? "underline" : "no-underline"}`} role="menuitem">
                    Happy-Bag
                  </span>
                </Link> : ""}
                {(category === "aromatizantes" && brand === "paloma") ?
                <Link href={`/pages/products/${category}/${brand}/Parfum`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/Parfum` ? "underline" : "no-underline"}`} role="menuitem">
                    Parfum
                  </span>
                </Link> : ""}
                {(category === "aromatizantes" && brand === "paloma") ?
                <Link href={`/pages/products/${category}/${brand}/Woody`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/Woody` ? "underline" : "no-underline"}`} role="menuitem">
                    Woody
                  </span>
                </Link> : ""}
                {(category === "baterias" && brand === "hankook") ?
                <Link href={`/pages/products/${category}/${brand}/MF54321`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/MF54321` ? "underline" : "no-underline"}`} role="menuitem">
                    MF54321
                  </span>
                </Link> : ""}
                {(category === "baterias" && brand === "hankook") ?
                <Link href={`/pages/products/${category}/${brand}/MF55457`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/MF55457` ? "underline" : "no-underline"}`} role="menuitem">
                    MF55457
                  </span>
                </Link> : ""}
                {(category === "baterias" && brand === "hankook") ?
                <Link href={`/pages/products/${category}/${brand}/MF47600`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/MF47600` ? "underline" : "no-underline"}`} role="menuitem">
                    MF47600
                  </span>
                </Link> : ""}
                {(category === "filtros" && brand === "mann") ?
                <Link href={`/pages/products/${category}/${brand}/C30171`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/C30171` ? "underline" : "no-underline"}`} role="menuitem">
                    C30171
                  </span>
                </Link> : ""}
                {(category === "filtros" && brand === "mann") ?
                <Link href={`/pages/products/${category}/${brand}/HU718-5X`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/HU718-5X` ? "underline" : "no-underline"}`} role="menuitem">
                    HU718-5X
                  </span>
                </Link> : ""}
                {(category === "filtros" && brand === "mann") ?
                <Link href={`/pages/products/${category}/${brand}/W610-6`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/W610-6` ? "underline" : "no-underline"}`} role="menuitem">
                    W610-6
                  </span>
                </Link> : ""}
                {(category === "neumaticos" && brand === "hankook") ?
                <Link href={`/pages/products/${category}/${brand}/155-65R13`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/155-65R13` ? "underline" : "no-underline"}`} role="menuitem">
                    155-65R13
                  </span>
                </Link> : ""}
                {(category === "neumaticos" && brand === "hankook") ?
                <Link href={`/pages/products/${category}/${brand}/185-65R14`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/185-65R14` ? "underline" : "no-underline"}`} role="menuitem">
                    185-65R14
                  </span>
                </Link> : ""}
                {(category === "neumaticos" && brand === "hankook") ?
                <Link href={`/pages/products/${category}/${brand}/175-60R15`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/175-60R15` ? "underline" : "no-underline"}`} role="menuitem">
                    175-60R15
                  </span>
                </Link> : ""}
              </div>
            </div>
          )}
        </div>
  )
}; export default ModelFilters;