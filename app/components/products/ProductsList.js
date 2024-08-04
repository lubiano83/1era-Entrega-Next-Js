"use client";
import React from 'react';
import ProductCard from './ProductCard';
import Title from '../Title';
import { useDarkMode } from '../../hooks/useDarkMode';
import InputFilter from './InputFilter';

const ProductsList = ({ data, category }) => {

  const { isDarkMode } = useDarkMode();

  return (
    <section className='flex flex-col justify-evenly w-full flex-wrap gap-8 m-8'>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <Title styles={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-3xl font-bold flex flex-wrap justify-center items-center text-center`}>Categoria: {category}</Title>
        <InputFilter category={category} data={data} />
      </div>
      <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {
            data.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))
        }
      </div>
    </section>
  )
}; export default ProductsList;