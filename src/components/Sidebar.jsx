import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <Link to="/">Dashboard</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/suppliers">Suppliers</Link>
    </div>
  );
}

export default Sidebar;
