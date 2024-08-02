"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import mockData from '../../../data/mockData';
import ProductsList from '../ProductsList';

const Category = () => {

  const { category } = useParams();
  const filterData = category === "all" ? mockData : mockData.filter(item => item.category.toLowerCase() === category.toLowerCase());

  return (
    <div className='h-full text-black bg-white flex justify-center items-center'>
      <ProductsList category={category} data={filterData} />
    </div>
  )
}; export default Category;
