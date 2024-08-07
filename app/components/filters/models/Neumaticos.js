import React from 'react';
import Link from 'next/link';

const Neumaticos = ({category, brand, closeDropdowns, path}) => {

  return (
    <>
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
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/${"175/60R15" ? "175-60R15" : ""}` ? "underline" : "no-underline"}`} role="menuitem">
            175-60R15
            </span>
        </Link> : ""}
    </>
  )
}; export default Neumaticos;
