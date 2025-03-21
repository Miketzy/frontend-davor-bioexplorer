import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import QuizIcon from "@mui/icons-material/Quiz";
import CollectionsIcon from "@mui/icons-material/Collections";
import PeopleIcon from "@mui/icons-material/People";
import AddBoxIcon from "@mui/icons-material/AddBox";

function Sidebar({ sidebarToggle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <DashboardIcon />, label: "Species Directory" },
    { icon: <AddCircleOutlineIcon />, label: "Add Species" },
    { icon: <AddBoxIcon />, label: "List of Species" },
    { icon: <AnalyticsIcon />, label: "Analytics" },
    { icon: <QuizIcon />, label: "Create Question" },
    { icon: <CollectionsIcon />, label: "Gallery" },
    { icon: <PeopleIcon />, label: "Contributor Requests" },
  ];

  return (
    <div
      className={`fixed h-full bg-gray-800 px-4 py-2  ${
        sidebarToggle ? "w-64" : "w-0 overflow-hidden"
      }`}
    >
      <div className="my-2 mb-4 flex items-center">
        <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr className="border-t-2 border-white" />
      <ul className="mt-3 text-white font-bold">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`mb-2 rounded py-2 cursor-pointer px-3 flex items-center transition-colors duration-300 
              ${
                activeIndex === index
                  ? "bg-blue-600 shadow-lg"
                  : "hover:bg-blue-500"
              }`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="w-6 h-6 mr-2 -mt-1">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
