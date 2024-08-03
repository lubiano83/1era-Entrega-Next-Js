"use client";
import { useState } from "react";

export const useShow = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return {handleShow, show};
};