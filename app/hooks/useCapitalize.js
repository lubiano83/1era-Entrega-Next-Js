"use client";

export const useCapitalize = () => {

  const capitalize = (string) => {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return '';
  };

  return { capitalize };
};