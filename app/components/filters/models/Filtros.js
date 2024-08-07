import React from 'react';
import Link from 'next/link';

const Filtros = ({category, brand, closeDropdowns, path}) => {
  return (
    <>
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
    </>
  )
}; export default Filtros;
