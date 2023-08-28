export default function Item({ item, onDeleteItem, onChecklist }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onChecklist(item)}
        checked={item.checked}
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item)}>&times;</button>
    </li>
  );
}
