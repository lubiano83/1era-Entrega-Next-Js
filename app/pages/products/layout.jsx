import NavigationMenu from '../../components/products/NavigationMenu';
import React from 'react';

const ShopLayout = ({children}) => {
  return (
    <div className='h-full bg-white'>
        <NavigationMenu />
        {children}
    </div>
  )
}; export default ShopLayout;
