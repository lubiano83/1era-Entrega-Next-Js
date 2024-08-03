import React from 'react';

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full text-gray-700">
      <span className="inline-block animate-marquee py-2">
        Este es un texto que se mueve hacia la izquierda.
      </span>
    </div>
  );
}; export default Marquee;
