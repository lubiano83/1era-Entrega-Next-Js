import React from 'react';
import Image from 'next/image';
import mockData from '../data/mockData';
import Boton from './Boton';
import QtySelector from './QtySelector';

const ProductDetail = () => {

    const item = mockData.find(p => p.slug === slug);

  return (
    <div className='max-w-4xl m-auto'>
      <Boton page="Back" styles={"text-sm text-blue-500 underline mb-6"} />
      <section className='flex gap-6'>
        <div className='relative basis-1/2'>
            <Image src={`img/products/${item.image}`} alt={item.title} width={860} height={860} />
        </div>
        <div className='basis-1/2'>
            <h2 className='text-2xl font-semibold border-b border-gray-200 pb-4 mb-4'>{item.title}</h2>
            <p className='text-4xl'>$ {item.price}</p>
            <QtySelector item={item} />
        </div>
      </section>
      <section className='mt-12'>
        <h3 className='text-x1 font-semibold border-b border-gray-200 pb-4 my-4'>Description</h3>
        <p className='text-gray-600'>{item.description}</p>
      </section>
    </div>
  )
}; export default ProductDetail;
