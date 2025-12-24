export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <p style={{ color: "#475569" }}>
        Inventory system is running successfully 🎉
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Card title="Total Items" value="120" />
        <Card title="Low Stock" value="8" />
        <Card title="Categories" value="12" />
        <Card title="Suppliers" value="6" />
      </div>
    </>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p style={{ fontSize: "28px", margin: "10px 0" }}>{value}</p>
    </div>
  );
}
