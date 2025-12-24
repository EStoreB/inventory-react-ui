import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#1e293b",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Inventory</h2>
        <nav>
          <p>📊 Dashboard</p>
          <p>📦 Items</p>
          <p>🏷 Categories</p>
          <p>🤝 Suppliers</p>
          <p>📈 Reports</p>
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "20px", background: "#f1f5f9" }}>
        <Dashboard />
      </main>
    </div>
  );
}
