import React from 'react';
import NavigationMenu from '../../components/filters/NavigationMenu';
import DynamicTitle from '@/app/components/DynamicTitle';

const ShopLayout = ({children}) => {
  return (
    <div className='bg-white h-full flex flex-col justify-between items-center'>
      <div className='gap-8 flex flex-col w-full'>
        <NavigationMenu />
        <DynamicTitle />
      </div>
        {children}
    </div>
  )
}; export default ShopLayout;
