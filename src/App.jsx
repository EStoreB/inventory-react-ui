import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Categories from "./pages/Categories";
import Suppliers from "./pages/Suppliers";

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/suppliers" element={<Suppliers />} />
        </Routes>
      </div>
    </div>
  );
}
<div className="app">
  <div className="sidebar">
    {/* links */}
  </div>

  <div className="content">
    <Routes>...</Routes>
  </div>
</div>

export default App;
