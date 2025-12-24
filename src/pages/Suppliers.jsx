import { useState } from "react";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "ABC Traders", contact: "9876543210" },
    { id: 2, name: "XYZ Systems", contact: "9123456780" }
  ]);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const addSupplier = () => {
    if (!name || !contact) return;

    setSuppliers([
      ...suppliers,
      { id: Date.now(), name, contact }
    ]);

    setName("");
    setContact("");
  };

  const deleteSupplier = (id) => {
    setSuppliers(suppliers.filter(s => s.id !== id));
  };

  return (
    <>
      <h1>Suppliers</h1>

      {/* Add Supplier */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Add Supplier</h3>

        <input
          placeholder="Supplier Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <button onClick={addSupplier}>Add Supplier</button>
      </div>

      {/* Supplier Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.contact}</td>
              <td>
                <button onClick={() => deleteSupplier(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Suppliers;
