import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ data }) => {

  return (
    <section className='flex justify-evenly w-full flex-wrap gap-8 m-8'>
        {
            data.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))
        }
    </section>
  )
}; export default ProductsList;