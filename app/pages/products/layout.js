import React from 'react';
import NavigationMenu from '../../components/products/NavigationMenu';

const ShopLayout = ({children}) => {
  return (
    <div className='bg-white h-full flex flex-col justify-between items-center'>
        <NavigationMenu />
        {children}
    </div>
  )
}; export default ShopLayout;
