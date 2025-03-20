import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="bg-gray-800 px-4 flex justify-between items-center ml-64 h-14">
      {/* Left Side: Menu Icon & Title */}
      <div className="flex items-center text-xl">
        <MenuIcon className="text-white cursor-pointer me-4" />
        <span className="text-white font-semibold">BioExplorer</span>
      </div>

      {/* Right Side: Search Bar */}
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-64">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white md:text-black text-xl cursor-pointer" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-10 py-2 rounded shadow outline-none hidden md:block"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
