"use client";
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import InputFilter from './InputFilter';

const ProductsList = ({ data, category }) => {

  const [productsFiltered, setProductsFiltered] = useState(data);

  return (
    <section className='flex flex-col justify-evenly w-full flex-wrap gap-8 m-8'>
      <InputFilter data={data} category={category} setProductsFiltered={setProductsFiltered} />
      <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {productsFiltered.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;