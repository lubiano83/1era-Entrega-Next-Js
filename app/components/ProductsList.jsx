import React from 'react'
import mockData from '../data/mockData';
import ProductCard from './ProductCard';

const ProductsList = ({data, category}) => {

  return (
    <section>
        {
            data.map((product, index) => (
                    <ProductCard key={index} img={product.img} category={product.category} brand={product.brand} model={product.model} description={product.description} quantity={product.quantity} price={product.price} />
                ))
        }
    </section>
  )
}; export default ProductsList;