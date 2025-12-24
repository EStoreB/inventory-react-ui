function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>Total Items</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>In Use</h3>
          <p>85</p>
        </div>

        <div className="card">
          <h3>Available</h3>
          <p>35</p>
        </div>

        <div className="card">
          <h3>Vendors</h3>
          <p>12</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
