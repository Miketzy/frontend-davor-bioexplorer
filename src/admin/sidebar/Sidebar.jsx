import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 fixed h-full">
      <div>
        <h1 className="text-2x text-white font-bold">Admin</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <DashboardIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Species Directory
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <DashboardIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Add Species
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <DashboardIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Analytics
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <DashboardIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Create Question
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <DashboardIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Gallery
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <DashboardIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Contributor Requests
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
