import React from 'react';
import ProductsList from '../../components/products/ProductsList';
import mockData from '../../data/mockData';

const Shop = () => {

  return (
    <div className='w-full h-full flex'>
     <ProductsList category={"todos"} data={mockData} />
    </div>
  )
}; export default Shop;
