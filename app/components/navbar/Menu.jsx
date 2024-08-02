"use client";
import React from "react";
import Image from "next/image";
import MenuList from "./MenuList";
import { useShow } from "../../hook/useShow";

const Menu = () => {

  const {show, handleShow} = useShow();

  return (
    <div onClick={ handleShow } className="pl-4">
      <Image
        src={"/burger-menu-svgrepo-com-white.svg"}
        alt="menu logo"
        height={40}
        width={40}
        className="hover:scale-110 cursor-pointer"
      />
      <MenuList handleShow={ handleShow } show={ show } />
    </div>
  );
}; export default Menu;
