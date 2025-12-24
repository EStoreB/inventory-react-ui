export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Inventory system is running successfully 🎉</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="Total Items" value="120" />
        <Card title="Low Stock" value="8" />
        <Card title="Categories" value="12" />
        <Card title="Suppliers" value="6" />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        minWidth: "150px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}
