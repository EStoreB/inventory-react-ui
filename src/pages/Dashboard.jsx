function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">
          <span>Total Items</span>
          <h1>120</h1>
        </div>

        <div className="card">
          <span>In Use</span>
          <h1>85</h1>
        </div>

        <div className="card">
          <span>Available</span>
          <h1>35</h1>
        </div>

        <div className="card">
          <span>Vendors</span>
          <h1>12</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
