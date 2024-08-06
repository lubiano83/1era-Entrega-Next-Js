"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Banner from '../Banner';
import { useParams } from 'next/navigation';
import { useDarkMode } from '../../hooks/useDarkMode';
import BrandFilters from './BrandFilters';
import CategoryFilters from './Categoryfilters';

const NavigationMenu = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const path = usePathname();
  const { category = "todos", brand = "todos" } = useParams();
  const { isDarkMode } = useDarkMode();

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsBrandOpen(false); // Cierra el dropdown de marcas cuando se abre el de categorías
  };

  const toggleBrandDropdown = () => {
    setIsBrandOpen(!isBrandOpen);
    setIsCategoryOpen(false); // Cierra el dropdown de categorías cuando se abre el de marcas
  };

  const closeDropdowns = () => {
    setIsCategoryOpen(false);
    setIsBrandOpen(false);
  };

  return (
    <Banner>
      <div className="flex w-full justify-evenly flex-wrap gap-4">
        <CategoryFilters toggleCategoryDropdown={toggleCategoryDropdown} closeDropdowns={closeDropdowns} isDarkMode={isDarkMode} path={path} isCategoryOpen={isCategoryOpen}/>
        <BrandFilters toggleBrandDropdown={toggleBrandDropdown} isBrandOpen={isBrandOpen} closeDropdowns={closeDropdowns} isDarkMode={isDarkMode} path={path} category={category}/>
      </div>
    </Banner>
  );
}; export default NavigationMenu;
