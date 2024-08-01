"use client";
import { useRouter } from 'next/router';
import React from 'react';

const GoToButton = ({styles, children, type, rute}) => {

    const router = useRouter();

  return (
    <button onClick={ type === "back" ? () => router.back() : type === "forward" ? () => router.forward() : type === "replace" ? () => router.replace({rute}) : type === "refresh" ? () => router.refresh() : "" } className={styles}>{children}</button>
  )
}; export default GoToButton;
