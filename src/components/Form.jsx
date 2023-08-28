import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const quantityNum = [...Array(20)].map((_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { id: Date.now(), name, quantity, checked: false };
    onAddItem(newItem);

    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
