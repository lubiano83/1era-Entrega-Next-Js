"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';


const GoBack = () => {

    const router = useRouter();

  return (
    <Button handleClick={() => router.back()}>Volver</Button>
  )
}; export default GoBack;
