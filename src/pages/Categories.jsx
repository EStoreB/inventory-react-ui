import { useEffect, useState } from "react";

const API_URL = "https://script.google.com/macros/s/AKfycbz68kPXoaT9HyMVigkhjbQH0OfpKkbrXExJ_iI025VIGXki-DC2K42ZACzzedkpnGHY/exec";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const loadCategories = async () => {
    const res = await fetch(`${API_URL}?type=categories`);
    const data = await res.json();
    setCategories(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const addCategory = async () => {
    if (!categoryName.trim()) {
      alert("Enter category name");
      return;
    }

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "categories",
        category_name: categoryName
      })
    });

    setCategoryName("");
    loadCategories();
  };

  return (
    <div>
      <h1>Categories</h1>

      <div className="card" style={{ maxWidth: 400 }}>
        <input
          placeholder="Category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button onClick={addCategory} style={{ marginTop: 10 }}>
          Add Category
        </button>
      </div>

      <table className="table" style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{c.category_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
