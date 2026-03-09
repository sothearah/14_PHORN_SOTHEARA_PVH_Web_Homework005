"use client";

import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

export default function DetailButtonComponent({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* calling Button Component */}
      <ButtonComponent onClick={() => setOpen(open)}>Detail</ButtonComponent>

      {/* popop */}

      {open && (
        <dialog className="bg-rose-200 w-full h-full flex justify-center items-center px-5 py-2 rounded-lg">
          <div className="w-[400px] h-[300px] bg-rose-100 rounded-lg flex flex-col justify-center items-center px-3">
            <div className="clear-both">ID: {item.id}</div>
            <div className="">Name: {item.item_name}</div>
            <div className="">Description: {item.item_description}</div>
            <div className="">Price: {item.item_price}</div>
            <div></div>
            <div></div>
            <buttononClick
              onClick={() => setOpen(!open)}
              className="float-end py-2 px-4 bg-rose-300 hover:bg-rose-400 rounded-lg"
            >
              Detail
            </buttononClick>
          </div>
        </dialog>
      )}
    </div>
  );
}
