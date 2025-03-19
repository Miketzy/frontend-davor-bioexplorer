import Navbar from "./admin/navbar/Navbar";
import Sidebar from "./admin/sidebar/Sidebar";
import "./App.css";

function App() {
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

export default App;
