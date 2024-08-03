import React from 'react';
import Image from 'next/image';

const SwitchLight = ({toggleDarkMode}) => {

  return (
    <Image src={"/light-svgrepo-com-white.svg"} alt="autoshop switchlight" height={45} width={45} onClick={toggleDarkMode} className='hover:scale-110 cursor-pointer' />
  )
}; export default SwitchLight;
