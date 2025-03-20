import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import QuizIcon from "@mui/icons-material/Quiz";
import CollectionsIcon from "@mui/icons-material/Collections";
import PeopleIcon from "@mui/icons-material/People";
import AddBoxIcon from "@mui/icons-material/AddBox";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className="my-2 mb-4 flex items-center">
        <img
          src="./save-picture/logo.png"
          alt="Dashboard"
          className="w-8 h-8 mr-2"
        />
        <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr className="border-t-2 border-white" />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <DashboardIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Species Directory
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <AddCircleOutlineIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Add Species
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <AddBoxIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            List of Species
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <AnalyticsIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Analytics
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <QuizIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Create Question
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <CollectionsIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Gallery
          </span>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <span className="px-3">
            <PeopleIcon className="inline-block w-6 h-6 mr-2 -mt-1" />
            Contributor Requests
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
