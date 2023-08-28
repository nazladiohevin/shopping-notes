import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

let groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem({ id }) {
    const newItem = items.filter((item) => item.id != id);
    setItems(newItem);
  }

  function handleChecklist({ id }) {
    setItems(
      items.map((item) =>
        item.id == id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onChecklist={handleChecklist}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}
