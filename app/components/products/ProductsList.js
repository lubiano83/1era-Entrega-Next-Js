"use client";
import React from 'react';
import ProductCard from './ProductCard';


const ProductsList = ({ data, category }) => {

  return (
    <section className='flex flex-col justify-evenly w-full flex-wrap gap-8 m-8'>
      <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;