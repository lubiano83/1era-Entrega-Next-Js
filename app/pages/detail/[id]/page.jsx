"use client";
import GoBack from '../../../components/GoBack';
import mockData from '../../../data/mockData';
import { useParams } from 'next/navigation';
import React from 'react'
import Button from '../../../components/Button';
import Image from 'next/image';

const ProductDetail = () => {

    const { id } = useParams();
    const singleProduct = mockData.find(product => product.id.toString() === id.toString());

  return (
    <article className='bg-white flex justify-center items-center flex-col py-8'>
      <div className='flex items-center flex-wrap justify-center'>
        <div className='bg-white'>
            <Image src={singleProduct.img} alt={singleProduct.model} height={288} width={288} />
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
      <div className='flex justify-center items-center gap-2 w-full'>
          <GoBack />
          <Button>Agregar</Button>
      </div>
    </article>
  )
}; export default ProductDetail;
