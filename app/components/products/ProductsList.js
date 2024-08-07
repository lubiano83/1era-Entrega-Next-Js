"use client";
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import InputFilter from '../filters/InputFilter';
import DynamicTitle from './DynamicTitle';

const ProductsList = ({ data, category, brand }) => {

  const [productsFiltered, setProductsFiltered] = useState(data);

  return (
    <section className='flex flex-col w-full gap-8 m-8'>
      <div className='flex flex-col gap-4'>
        <DynamicTitle />
        <InputFilter data={data} brand={brand} category={category} setProductsFiltered={setProductsFiltered} />
      </div>
      <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {productsFiltered.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}; export default ProductsList;