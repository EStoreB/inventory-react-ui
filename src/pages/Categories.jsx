const API = "https://script.google.com/macros/s/AKfycbz68kPXoaT9HyMVigkhjbQH0OfpKkbrXExJ_iI025VIGXki-DC2K42ZACzzedkpnGHY/exec";

const addCategory = async () => {
  const params = new URLSearchParams({
    action: "addCategory",
    category_name: category
  });

  const res = await fetch(`${API}?${params}`);
  const data = await res.json();

  if (data.error) alert(data.error);
  else alert("Category Added");
};
