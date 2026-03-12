import React from "react";
import Image from "next/image";
import DetailButtonComponent from "../button/DetailButtonComponent";

export default function CardComponent({ items }) {
  // console.log(items);
  return (
      <main className="w-[85%] mx-auto">
          <div className="flex flex-col justify-end">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between h-[100px] text-white border border-stone-700 rounded-md px-2 py-1 my-1"
              >
                <div className="flex-1 flex items-center justify-between">
                  <Image
                  src={item.image}
                  alt={item.item_name}
                  width={60}
                  height={60}
                  className="w-20 h-18 rounded-lg object-cover"
                  unoptimized
                />
                <div className="flex gap-2 flex-wrap">
                  <span className="text-md font-semibold">
                    {item.item_name}
                  </span>
                  <span className="text-sm text-zinc-200">
                    ${item.item_price}
                  </span>

                  <svg
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bookmark-icon lucide-bookmark"
                  >
                    <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                  </svg>
                  <p className="w-full">
                    <span>{item.item_description}</span>
                  </p>
                </div>
                <DetailButtonComponent item={item} />
                </div>
              </div>
            ))}
          </div>
      </main>
  );
}
