import React, { useEffect, useState } from "react";
import { Items } from "./components/Items";

const RID = () => {
  const ID = Math.trunc(Math.random() * 100);
  return ID;
};

export const App = () => {
  const [add, setAdd] = useState("");

  const [item, setItems] = useState([]);

  const [complete, setCompleted] = useState(0);

  const [editing, setEditing] = useState(false);
  const [editingItem, setEditingItem] = useState({});

  useEffect(() => {
    setCompleted([...item.filter((item) => item.completed)].length);
  }, [item]);

  function addItem() {
    if (add.trim() !== "") {
      const newItem = { id: RID(), text: add, completed: false };
      setItems([...item, newItem]);
      setAdd("");
    } else {
      alert("Invalid Values");
    }
  }

  function changeTick(it) {
    setItems([
      ...item.map((ajtem) =>
        ajtem.id === it.id
          ? { id: ajtem.id, text: ajtem.text, completed: !ajtem.completed }
          : ajtem
      ),
    ]);
  }

  function deleteItem(it) {
    setItems([...item.filter((ajtem) => ajtem.id !== it.id)]);
  }

  function editItem(item) {
    setEditingItem(item);
    setEditing(!editing);
  }

  function updateItem() {
    setItems([
      ...item.map((ajtem) =>
        ajtem.id === editingItem.id
          ? {
              id: ajtem.id,
              text: editingItem.text,
              comepleted: ajtem.comepleted,
            }
          : ajtem
      ),
    ]);
    setEditing(false);
  }

  return (
    <div id="app">
      <input
        type="text"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
        placeholder="Enter a new Item"
      />
      <button onClick={addItem}>Add item</button>
      <br />
      <br />
      {item.length > 0 && <p>Number of completed Items: {complete}</p>}
      <Items
        listOfItems={item}
        changeTick={changeTick}
        deleteItem={deleteItem}
        editing={editing}
        setEditing={editItem}
        editingItem={editingItem}
        setEditingItem={(e) => {
          setEditingItem({ ...editingItem, text: e.target.value });
        }}
        cancel={() => {
          setEditing(false);
        }}
        save={updateItem}
      />
    </div>
  );
};
