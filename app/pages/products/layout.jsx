import NavigationMenu from '../../components/NavigationMenu';
import React from 'react';

const ShopLayout = ({children}) => {
  return (
    <div className='h-full bg-white pb-8'>
        <NavigationMenu />
        {children}
    </div>
  )
}; export default ShopLayout;
