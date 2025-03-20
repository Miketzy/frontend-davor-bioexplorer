import { useState, useEffect } from "react";
import Sidebar from "../../../admin/sidebar/Sidebar";
import Navbar from "../../../admin/navbar/Navbar";
import Home from "../../../admin/Home";

function Dashboard() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  // Function to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarToggle(false); // Hide sidebar on small screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (Fixed & Over Navbar) */}
      {sidebarToggle && (
        <>
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
            <Sidebar sidebarToggle={sidebarToggle} />
          </div>
          {/* Overlay for background dim effect */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarToggle(false)} // Close sidebar when clicked outside
          ></div>
        </>
      )}

      {/* Main Content */}
      <div
        className={`flex flex-col w-full  ${
          sidebarToggle ? "ml-64 md:ml-64" : "ml-0"
        }`}
      >
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />

        {/* Main Dashboard Content */}
        <main className="p-6 flex-grow">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
