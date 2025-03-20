import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PageviewIcon from "@mui/icons-material/Pageview";
import { FaUser, FaSignOutAlt, FaRegUserCircle } from "react-icons/fa";

function Navbar({ sidebarToggle, setSidebarToggle }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="relative bg-gray-800 px-4 flex justify-between items-center h-16 z-40">
      {/* Left Side - Logo & Menu */}
      <div className="flex items-center text-xl">
        <MenuIcon
          className="text-white cursor-pointer mr-4"
          onClick={() => setSidebarToggle(!sidebarToggle)} // Toggle Sidebar
        />
        <img
          src="./save-picture/logo.png"
          alt="Dashboard"
          className="w-8 h-8 mr-2"
        />
        <span className="text-white font-semibold">BioExplorer</span>
      </div>

      {/* Center - Search Bar */}
      <div className="relative hidden md:flex items-center bg-white rounded-md shadow px-3">
        <PageviewIcon className="text-gray-600" />
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 outline-none w-64 text-gray-900 bg-transparent"
        />
      </div>

      {/* Right Side - User Dropdown */}
      <div className="relative">
        <button
          className="text-white focus:outline-none cursor-pointer"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <FaRegUserCircle className="w-8 h-8" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-b">
              <p className="text-gray-800 font-semibold">John Doe</p>
              <p className="text-gray-600 text-sm">johndoe@example.com</p>
            </div>
            <ul className="text-gray-800">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2">
                <FaUser className="text-gray-600" /> Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2 border-t">
                <FaSignOutAlt className="text-red-600" /> Log out
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
