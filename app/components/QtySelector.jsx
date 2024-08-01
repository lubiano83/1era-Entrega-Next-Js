import React, { useState } from 'react'
import Boton from './Boton';
import Counter from './Counter';

const QtySelector = () => {

    const [ quantity, setQuantity ] = useState(1);

    const handleAdd = () => {
        console.log({ ...item, quantity });
    };

  return (
    <div className='flex flex-col gap-5 mt-6'>
        <Counter />
        <Boton styles={"w-full hover:bg-blue-600"} handleClick={handleAdd} />
    </div>
  )
}; export default QtySelector;
