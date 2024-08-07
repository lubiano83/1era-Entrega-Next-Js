import React from 'react';
import Link from 'next/link';

const Baterias = ({category, brand, closeDropdowns, path}) => {
  return (
    <>
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
    </>
  )
}; export default Baterias;
