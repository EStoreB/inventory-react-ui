import { useEffect, useState } from "react";

const API = "https://script.google.com/macros/s/AKfycbz68kPXoaT9HyMVigkhjbQH0OfpKkbrXExJ_iI025VIGXki-DC2K42ZACzzedkpnGHY/exec";

export default function Inventory() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    item_name: "",
    category_id: "",
    quantity: "",
    status: "Available"
  });

  useEffect(() => {
    fetch(`${API}?action=categories`)
      .then(res => res.json())
      .then(setCategories);
  }, []);

  const submit = async () => {
    const params = new URLSearchParams({
      action: "addInventory",
      ...form
    });

    await fetch(`${API}?${params}`);
    alert("Inventory Added");
  };

  return (
    <>
      <h2>Add Inventory</h2>

      <input placeholder="Item Name"
        onChange={e => setForm({ ...form, item_name: e.target.value })}
      />

      <select
        onChange={e => setForm({ ...form, category_id: e.target.value })}
      >
        <option value="">Select Category</option>
        {categories.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <input type="number" placeholder="Quantity"
        onChange={e => setForm({ ...form, quantity: e.target.value })}
      />

      <select
        onChange={e => setForm({ ...form, status: e.target.value })}
      >
        <option>Available</option>
        <option>In Use</option>
      </select>

      <button onClick={submit}>Add Inventory</button>
    </>
  );
}
