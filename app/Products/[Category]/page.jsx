import React from 'react';

export async function generateMetadata({params, searchParams}, parent) {
  return {
    title: `AutoShop: ${params.Category}`,
    description: `Esta es la pagina de ${params.Category}`
  }
};

const Product = ({params}) => {
  return (
    <div className='h-full text-black bg-pink-500 flex justify-center items-center'>
      Estas viendo: {params.Category}
    </div>
  )
}; export default Product;
