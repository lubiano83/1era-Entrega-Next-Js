"use client";
import GoBack from '../../../components/GoBack';
import mockData from '../../../data/mockData';
import { useParams } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import Counter from '@/app/components/Counter';

const ProductDetail = () => {

    const { id } = useParams();
    const singleProduct = mockData.find(product => product.id.toString() === id.toString());

  return (
    <article className='bg-white flex justify-center items-center flex-col py-8'>
      <div className='flex items-center flex-wrap justify-center'>
        <div className='bg-white'>
            <Image src={singleProduct.img} alt={singleProduct.model} height={288} width={288} className='hover:scale-150 hover:border-2 hover:border-gray-700 hover:rounded-2xl' />
        </div>
        <div className='p-4 text-gray-700 h-72 flex flex-col items-start justify-center gap-4 text-xl'>
            <p><strong>Categoria:</strong> {singleProduct.category}</p>
            <p><strong>Marca:</strong> {singleProduct.brand}</p>
            <p><strong>Modelo:</strong> {singleProduct.model}</p>
            <p><strong>Descripcion:</strong> {singleProduct.description}</p>
            <p><strong>Cantidad:</strong> {singleProduct.quantity}</p>
            <p><strong>Precio:</strong> ${singleProduct.price}</p>
        </div>
      </div>
      <div className='py-4 px-7 text-gray-700 container text-m'>
        <p><strong>Detalle:</strong> {singleProduct.detail}</p>
      </div>
      <div>
          <Counter />
      </div>
    </article>
  )
}; export default ProductDetail;
