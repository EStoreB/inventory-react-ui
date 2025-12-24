import { useState } from "react";

function Inventory() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Dell Keyboard",
      qty: 10,
      status: "Available"
    },
    {
      id: 2,
      name: "HP Mouse",
      qty: 5,
      status: "In Use"
    }
  ]);

  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState("Available");

  const addItem = () => {
    if (!name || !qty) return;

    setItems([
      ...items,
      {
        id: Date.now(),
        name,
        qty,
        status
      }
    ]);

    setName("");
    setQty("");
    setStatus("Available");
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <h1>Inventory</h1>

      {/* Add Item */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Add Item</h3>

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

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Available</option>
          <option>In Use</option>
        </select>

        <br />
        <button onClick={addItem}>Add Item</button>
      </div>

      {/* Items Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Inventory;
