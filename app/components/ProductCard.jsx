import React from 'react';
import Button from './Button';
import Image from 'next/image';

const ProductCard = ({img, category, brand, model, description, quantity, price}) => {
  return (
    <article>
      <div>
        <Image src={img} alt={model} height={100} width={100} />
      </div>
      <div>
        <p>{category}</p>
        <p>{brand}</p>
        <p>{model}</p>
        <p>{description}</p>
        <p>{quantity}</p>
        <p>${price}</p>
      </div>
      <Button>Detail</Button>
    </article>
  )
}; export default ProductCard;
