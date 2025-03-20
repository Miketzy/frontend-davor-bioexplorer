import React from "react";
import Sidebar from "../../../admin/sidebar/Sidebar";
import Navbar from "../../../admin/navbar/Navbar";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <Navbar />
          <div>
            <h1>Admin Dashboard</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
