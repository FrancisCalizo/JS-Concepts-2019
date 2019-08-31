// Uses useState Hook
import React, { useState } from 'react';

const initialTodos = [
  {
    id: 1,
    task: 'Wash dishes',
    completed: false
  },
  {
    id: 2,
    task: 'Do laundry',
    completed: false
  },
  {
    id: 3,
    task: 'Take out trash',
    completed: false
  }
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleChange = id => {
    const temporaryTodos = todos.map(todo => {
      todo.id === id && (todo.completed = !todo.completed);
      return todo;
    });

    setTodos(temporaryTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul style={{ listStyleType: 'none' }}>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChange(todo.id)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
