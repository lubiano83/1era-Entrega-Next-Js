"use client";
import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import Title from '../Title';
import { useCapitalize } from '../../hooks/useCapitalize';

const InputFilter = ({ data, category, setProductsFiltered }) => {
  const [keyword, setKeyword] = useState("");
  const { isDarkMode } = useDarkMode();
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
          product.category.toLowerCase().includes(keyword.toLowerCase())
          || product.brand.toLowerCase().includes(keyword.toLowerCase())
          || product.model.toLowerCase().includes(keyword.toLowerCase())
          || product.description.toLowerCase().includes(keyword.toLowerCase())
          // || product.price.toString().includes(keyword)
        )
      );
  
      setProductsFiltered(productsFilter);
    } catch (error) {
      console.log(error.message);
    }

  }, [keyword, category, data, setProductsFiltered]);

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <Title styles={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-3xl font-bold flex flex-wrap justify-center items-center text-center`}>
          Categoria: {capitalize(category)}
        </Title>
      </div>
      <input
        className='bg-white rounded-xl w-72 h-10 border-2 border-gray-700 px-2 text-gray-700'
        placeholder='Busca por marca, modelo, etc...'
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
}; export default InputFilter;