"use client";

import React from "react";

const NavbarComponent = () => {
  return (
    <>
      <nav className="w-full h-[50px] bg-rose-300 flex items-center gap-2">
        <span className="w-10 h-10 rounded-full border border-olive-200 inline-block">
          <img
            src="https://imgs.search.brave.com/WZBmInNancGgvD8qnZZ4UgUz2rzLLj--14N5uxuU-n0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjEwMzc0MDQtNjFj/ZDQ2YWE2MTViP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZhdXRvPWZv/cm1hdCZmaXQ9Y3Jv/cCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE0z/eDhaRzluZkdWdWZE/QjhmREI4Zkh3dw"
            alt="Landscape picture"
            className="w-10 h-10 rounded-full inline-block "
          />
        </span>
        <a href="" className="text-white font-semibold">
          Dashboard
        </a>
        <a href=""></a>
      </nav>
    </>
  );
};

export default NavbarComponent;
