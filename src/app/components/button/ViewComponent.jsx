"use client";

import React from "react";

const ViewComponent = ({children, onClick}) => {
  return (
    <button onClick={onClick} className="hover:bg-gray-700 px-3 py-1 bg-gray-600 text-white rounded-md">
      View
      {children}
    </button>
  );
};

export default ViewComponent;
