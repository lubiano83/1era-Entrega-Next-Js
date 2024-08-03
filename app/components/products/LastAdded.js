import React from 'react';
import ProductCard from './ProductCard';

const LastAdded = ({data}) => {

    const reversedData = [...data].reverse().slice(0, 5); // esto para hacer que la data se vea al revez y ver los primeros 5 productos.

    if(!reversedData){
      return console.log("reversedData no existe");
    };

  return (
    <section className='flex justify-evenly w-full flex-wrap gap-8 px-8'>
        {
            reversedData.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))
        }
    </section>
  )
}; export default LastAdded;
