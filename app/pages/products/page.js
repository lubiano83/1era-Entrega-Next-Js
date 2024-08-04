"use client";
import React, { useState } from 'react';
import ProductsList from '../../components/products/ProductsList';
import mockData from '../../data/mockData';
import InputFilter from '../../components/products/InputFilter';

const Shop = () => {
  const [productsFiltered, setProductsFiltered] = useState(mockData);

  return (
    <div className='flex justify-center items-center w-full h-full flex-col'>
      <InputFilter data={mockData} category="todos" setProductsFiltered={setProductsFiltered} />
      <ProductsList data={productsFiltered} category="todos" />
    </div>
  );
};

export default Shop;