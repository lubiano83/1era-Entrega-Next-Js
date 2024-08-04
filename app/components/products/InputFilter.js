import React, { useState, useEffect } from 'react'

const InputFilter = () => {

  const [ keyword, setKeyword ] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
    console.log(e.target.value);
  };
  
  return (
      <div className='flex justify-center items-center'>
        <input className='bg-white rounded-xl w-72 h-10 border-2 border-gray-700 px-2 text-gray-700' placeholder='Search..' value={keyword} onChange={handleChange} />
      </div>
  )
    
}; export default InputFilter;
