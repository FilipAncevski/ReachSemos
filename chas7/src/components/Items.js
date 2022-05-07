import React from "react";

export const Items = ({
  listOfItems,
  changeTick,
  deleteItem,
  editing,
  setEditing,
  editingItem,
  setEditingItem,
  cancel,
  save,
}) => {
  return listOfItems.length > 0 ? (
    <table border="1px">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {listOfItems.map((it) => {
          return (
            <tr key={it.id}>
              {editing && it.id === editingItem.id ? (
                <>
                  <td>{it.id}</td>
                  <td>
                    <input value={editingItem.text} onChange={setEditingItem} />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value={it.completed}
                      onChange={() => changeTick(it)}
                      checked={it.completed}
                    />
                  </td>
                  <td>
                    <button onClick={save}>Save</button>
                    <button onClick={cancel}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{it.id}</td>
                  <td>{it.text}</td>
                  <td>
                    <input
                      type="checkbox"
                      value={it.completed}
                      onChange={() => changeTick(it)}
                      checked={it.completed}
                    />
                  </td>
                  <td>
                    <button onClick={() => deleteItem(it)}>Delete</button>
                    <button onClick={() => setEditing(it)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p>No Items in the array</p>
  );
};
