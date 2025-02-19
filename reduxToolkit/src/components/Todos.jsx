import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleUpdate = (id, text) => {
    setEditId(id);
    setNewText(text);
  };

  const handleSave = (id) => {
    if (!newText.trim()) return;
    dispatch(updateTodo({ id, newText }));
    setEditId(null);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4">Todo List</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="flex-1 px-2 py-1 border rounded-md"
              />
            ) : (
              <span className="text-gray-800">{todo.text}</span>
            )}
            <div className="flex space-x-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleUpdate(todo.id, todo.text)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
