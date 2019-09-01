// Uses useReducer Hook
import React, { useReducer } from 'react';

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

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: true
          };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: false
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const App = () => {
  const [currentTodos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleChange = todo => {
    dispatch({
      type: todo.completed ? 'UNDO_TODO' : 'DO_TODO',
      payload: {
        id: todo.id
      }
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul style={{ listStyleType: 'none' }}>
        {currentTodos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChange(todo)}
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
