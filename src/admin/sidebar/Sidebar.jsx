import React from "react";
import { FaHome } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 fixed h-full">
      <div>
        <h1 className="text-2x text-white font-bold"> Admin</h1>
      </div>
      <hr />
      <ul className="text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2">
              Species Directory
            </FaHome>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
