"use client";
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import InputFilter from '../filters/InputFilter';

const ProductsList = ({ data, category, brand }) => {

  const [productsFiltered, setProductsFiltered] = useState(data);

  return (
    <section className='flex flex-col w-full gap-8 m-8'>
        {/* <InputFilter data={data} brand={brand} category={category} setProductsFiltered={setProductsFiltered} /> */}
      <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {productsFiltered.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}; export default ProductsList;