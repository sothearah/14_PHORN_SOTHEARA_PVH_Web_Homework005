"use client";

import React from "react";

const ButtonComponent = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-gray-700 hover:border-white-200 px-3 py-1 bg-gray-500 text-white rounded-md"
    >
      
      {children}
    </button>
  );
};

export default ButtonComponent;
