import { useEffect, useState } from "react";

const API = "https://script.google.com/macros/s/AKfycbz68kPXoaT9HyMVigkhjbQH0OfpKkbrXExJ_iI025VIGXki-DC2K42ZACzzedkpnGHY/exec";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  // Load categories from Google Sheets
  const loadCategories = async () => {
    try {
      const res = await fetch(`${API}?action=categories`);
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const addCategory = async () => {
    if (!category.trim()) {
      alert("Enter category name");
      return;
    }

    try {
      // Create query params
      const params = new URLSearchParams({
        action: "addCategory",
        category_name: category,
      });

      const res = await fetch(`${API}?${params.toString()}`);
      const data = await res.json();

      if (data.error) {
        alert("Error: " + data.error);
      } else {
        alert("Category added successfully!");
        setCategory("");
        loadCategories(); // reload the list
      }
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  return (
    <>
      <h1>Categories</h1>

      <div className="card" style={{ maxWidth: 400 }}>
        <input
          type="text"
          placeholder="Category name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          {categories.map((c, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{c.category_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
