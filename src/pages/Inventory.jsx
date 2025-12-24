import { useEffect, useState } from "react";

const API_URL = "https://script.google.com/macros/s/AKfycbz68kPXoaT9HyMVigkhjbQH0OfpKkbrXExJ_iI025VIGXki-DC2K42ZACzzedkpnGHY/exec";

function Inventory() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState("Available");

  // Load from Google Sheet
  const loadItems = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    loadItems();
  }, []);

  // Save to Google Sheet
  const addItem = async () => {
    if (!name || !qty) return;

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        item_name: name,
        quantity: qty,
        status: status
      })
    });

    setName("");
    setQty("");
    setStatus("Available");
    loadItems();
  };

  return (
    <>
      <h1>Inventory</h1>

      <div className="card">
        <input
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Available</option>
          <option>In Use</option>
        </select>

        <button onClick={addItem}>Add Item</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item.item_name}</td>
              <td>{item.quantity}</td>
              <td>{item.status}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Inventory;
