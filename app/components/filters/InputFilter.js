"use client";
import React, { useState, useEffect } from 'react';
import { useCapitalize } from '@/app/hooks/useCapitalize';

const InputFilter = ({ data, category, setProductsFiltered }) => {
  const [keyword, setKeyword] = useState("");
  const { capitalize } = useCapitalize();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    try {
      const productsPrefiltered = data.filter(product => {
        if (category === "todos") {
          return true;
        }
        return product.category.toLowerCase() === category.toLowerCase();
      });
  
      const productsFilter = productsPrefiltered.filter(product =>
        (
          product.category.toLowerCase().includes(keyword.toLowerCase().trim())
          || product.brand.toLowerCase().includes(keyword.toLowerCase().trim())
          || product.model.toLowerCase().includes(keyword.toLowerCase().trim())
          || product.description.toLowerCase().includes(keyword.toLowerCase().trim())
        )
      );

      setProductsFiltered(productsFilter);
    } catch (error) {
      console.log(error.message);
    }

  }, [keyword, category, data, setProductsFiltered]);

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <input
        className='bg-white rounded-xl w-72 h-10 border-2 border-gray-700 px-2 text-gray-700 shadow-gray-700 shadow-sm'
        placeholder='Filtro Avanzado...'
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
}; export default InputFilter;