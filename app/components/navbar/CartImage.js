import React from 'react';
import Image from 'next/image';

const CartImage = () => {
  return (
    <Image src={"/cart-shopping-svgrepo-com-white.svg"} alt={"autoshop cart"} height={45} width={45} className='hover:scale-110' />
  )
}; export default CartImage;
