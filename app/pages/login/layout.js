import React from 'react';
import Banner from '@/app/components/Banner';

const LoginLayout = ({children}) => {
  return (
    <div className='bg-white w-full h-full flex flex-col justify-between items-center text-center'>
        <Banner>OJO: Debe ingresar con su cuenta para poder comprar en la tienda...</Banner>
      {children}
    </div>
  )
}; export default LoginLayout;