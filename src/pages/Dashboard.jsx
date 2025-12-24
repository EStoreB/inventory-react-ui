function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <div className="dashboard-grid">
        <div className="card">
          <h4>Total Items</h4>
          <h1>120</h1>
        </div>

        <div className="card">
          <h4>In Use</h4>
          <h1>85</h1>
        </div>

        <div className="card">
          <h4>Available</h4>
          <h1>35</h1>
        </div>

        <div className="card">
          <h4>Vendors</h4>
          <h1>12</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
