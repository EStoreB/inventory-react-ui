import { useEffect, useState } from "react";

const API_URL = "PASTE_YOUR_SCRIPT_URL";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const loadCategories = async () => {
    const res = await fetch(`${API_URL}?type=categories`);
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const addCategory = async () => {
    if (!name) return;

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        type: "category",
        category_name: name
      })
    });

    setName("");
    loadCategories();
  };

  return (
    <>
      <h1>Categories</h1>

      <div className="card">
        <input
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addCategory}>Add Category</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c, i) => (
            <tr key={i}>
              <td>{c.category_name}</td>
              <td>{c.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Categories;
