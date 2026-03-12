"use client";

import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

export default function DetailButtonComponent({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* calling Button Component */}
      <ButtonComponent onClick={() => setOpen(!open)}>View</ButtonComponent>

      {open && (
        <dialog
          className="border-red-200 bg-black/70 fixed inset-0 w-full h-full flex items-center justify-center z-50"
        >
          <div className="w-[400px] h-[300px] bg-black text-white rounded-lg flex flex-col px-3">
            <div className="flex justify-between items-center">
              <div className="font-bold">Item Details</div>
              <button
                onClick={() => setOpen(!open)}
                className="float-right py-2 px-4 hover:border-gray-400 rounded-lg shadow-md"   
              >
                Close
              </button>
            </div>

            <span className="">
              <span className="font-bold clear-both">ID: </span>
              <span className="text-sm text-gray-300">{item.id}</span>
            </span>

            <span className="">
              <span className="font-bold clear-both">Name: </span>
              <span className="text-sm text-gray-300">{item.item_name}</span>
            </span>

            <span className="">
              <span className="font-bold clear-both">Price: </span>
              <span className="text-sm text-gray-300">{item.item_price}</span>
            </span>

            <span className="">
              <span className="font-bold clear-both">Description: </span>
              <br />
              <span className="text-sm text-gray-300">
                {item.item_description}
              </span>
            </span>
          </div>
        </dialog>
      )}
    </div>
  );
}
