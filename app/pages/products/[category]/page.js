"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import mockData from '../../../data/mockData';
import ProductsList from '../../../components/products/ProductsList';

const Category = () => {

  const { category } = useParams();
  const filterData = category === "todos" ? mockData : mockData.filter(item => item.category.toLowerCase() === category.toLowerCase());

  if(!filterData){
    return console.log("filterData no existe");
  };

  return (
    <div className='w-full h-full flex'>
      <ProductsList category={category} data={filterData} />
    </div>
  )
}; export default Category;
