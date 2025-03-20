import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import QuizIcon from "@mui/icons-material/Quiz";
import CollectionsIcon from "@mui/icons-material/Collections";
import PeopleIcon from "@mui/icons-material/People";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    { name: "Species Directory", icon: <DashboardIcon /> },
    { name: "Add Species", icon: <AddCircleOutlineIcon /> },
    { name: "List of Species", icon: <AddBoxIcon /> },
    { name: "Analytics", icon: <AnalyticsIcon /> },
    { name: "Create Question", icon: <QuizIcon /> },
    { name: "Gallery", icon: <CollectionsIcon /> },
    { name: "Contributor Requests", icon: <PeopleIcon /> },
  ];
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
      <ul className="text-white font-bold">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`mb-2 rounded py-2 px-3 flex items-center cursor-pointer transition-all ${
              activeIndex === index
                ? "bg-blue-700 shadow-lg"
                : "hover:bg-blue-500 hover:shadow"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="inline-block w-6 h-6 mr-2">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
