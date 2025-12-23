import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Inventory Management UI</h1>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Inventory system is running successfully 🎉</p>
    </div>
  );
}
