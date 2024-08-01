import React from 'react'
import ProductsList from '../components/ProductsList';
import mockData from '../data/mockData'; 

const Products = () => {
  return (
    <div className='h-full bg-white flex justify-center items-center  text-gray-700'>
     <ProductsList category={"all"} data={mockData} />
    </div>
  )
}; export default Products;
