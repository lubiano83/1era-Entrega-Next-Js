import React from 'react';
import ProductsList from '../../components/products/ProductsList';
import mockData from '../../data/mockData';

const Shop = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
     <ProductsList category={"todos"} data={mockData} />
    </div>
  )
}; export default Shop;
