"use client";

import React from "react";
import SeacrchBarComponent from "../components/NavbarComponent";
import Image from "next/image";

const NavbarComponent = () => {
  return (
    <>
      <nav className="px-2 flex justify-between w-full h-[70px] bg-black/90 flex items-center gap-2 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="border-white-200 w-10 h-10 rounded-full border border-olive-200 inline-block">
            <Image
              src="https://imgs.search.brave.com/KLg3LDVH6pNrdBdqZMrBCX5njtAsSDHY1bZDS0Vi8rw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS41NTg0/MDk5NDgzLjk2OTUv/dXIscGluX2xhcmdl/X2Zyb250LHNxdWFy/ZSw2MDB4NjAwLmpw/Zw"
              alt="Landscape picture"
              className=" border-white-200 w-10 h-10 rounded-full inline-block "
              width={40}
              height={40}
            />
          </span>
          <a href="" className="text-white font-semibold">
            Dashboard
          </a>
        </div>
        <SeacrchBarComponent />
      </nav>
    </>
  );
};

export default NavbarComponent;
