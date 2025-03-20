import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PageviewIcon from "@mui/icons-material/Pageview";

function Navbar() {
  return (
    <nav className="bg-gray-800 px-4 flex justify-between ml-64">
      <div className="flex items-center text-xl">
        <MenuIcon className="text-white me-4 cursor-pointer" />
        <span className="text-white font-semibold">BioExplorer</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <PageviewIcon />
            </button>
            <input
              type="text"
              className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
