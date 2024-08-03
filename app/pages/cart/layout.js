import React from 'react';
import Banner from '../../components/Banner';

const CartLayout = ({children}) => {
  return (
    <div className='bg-white h-full flex flex-col justify-between items-center'>
        {children}
        <Banner>Por compras antes de las 12 PM, el envio se gestionara el mismo dia...</Banner>
    </div>
  )
}; export default CartLayout;