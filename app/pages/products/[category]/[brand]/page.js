"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import mockData from '@/app/data/mockData';
import ProductsList from '@/app/components/products/ProductsList';

const Brand = () => {

  const { brand } = useParams();
  const { category } = useParams();
  const filterData = category === "todos" ? mockData : mockData.filter(item => item.category.toLowerCase() === category.toLowerCase());
  const filterDataTwo = brand === "" ? filterData : filterData.filter(item => item.brand.toLowerCase() === brand.toLowerCase());
  
  if(!filterData) {
    return console.log("filterData no existe");
  };

  if(!filterDataTwo) {
    return console.log("filterDataTwo no existe");
  };

  return (
    <div className='w-full h-full flex'>
     <ProductsList category={category} data={filterDataTwo} />
    </div>
  )
}; export default Brand;
