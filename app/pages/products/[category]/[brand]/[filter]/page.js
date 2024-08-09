"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import mockData from '@/app/data/mockData';
import ProductsList from '@/app/components/products/ProductsList';

const Filter = () => {

  const { brand } = useParams();
  const { category } = useParams();
  const { filter } = useParams();
  const filterData = category === "todos" ? mockData : mockData.filter(item => item.category.toLowerCase() === category.toLowerCase());
  const filterDataTwo = brand === "todos" ? filterData : filterData.filter(item => item.brand.toLowerCase() === brand.toLowerCase());
  const filterDataThree = filter === "todos" ? filterDataTwo : filterDataTwo.filter(item => item.filter.toLowerCase() === filter.toLowerCase());
  
  if(!filterData) {
    return console.log("filterData no existe");
  };

  if(!filterDataTwo) {
    return console.log("filterDataTwo no existe");
  };

  if(!filterDataThree) {
    return console.log("filterDataThree no existe");
  };

  return (
    <div className='w-full h-full flex'>
     <ProductsList category={category} brand={brand} filter={filter} data={filterDataThree} />
    </div>
  )
}; export default Filter;
