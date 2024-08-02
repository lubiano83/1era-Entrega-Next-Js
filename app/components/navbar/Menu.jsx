"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuList from "./MenuList";

const Menu = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  };

  return (
    <div onClick={ handleOpen } className="pl-4">
      <Image
        src={"/burger-menu-svgrepo-com-white.svg"}
        alt="menu logo"
        height={40}
        width={40}
      />
      <MenuList handleOpen={ handleOpen } open={ open } />
    </div>
  );
}; export default Menu;
