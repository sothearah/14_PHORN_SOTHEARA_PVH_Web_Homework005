'use client';

import React from "react";

const ButtonComponent = ({children, onClick}) => {
    return (
        <button onClick={onClick} className="bg-violet-500 hover:border-violet-400 px-2 py-1 rounded-lg text-olive-200 border border-violet-200">{children}</button>
    );
}

export default ButtonComponent;