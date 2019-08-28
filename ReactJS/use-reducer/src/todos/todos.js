import React, { useContext } from 'react';
import TodoContext from '../context/todoContext';

const Todos = () => {
  const todoContext = useContext(TodoContext);

  return (
    <div>
      <h1>To-do Component</h1>
      <ul>
        {console.log(todoContext)}
        {todoContext.todos.map(todo => (
          <li key={todo.id} style={{ listStyleType: 'none' }}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                // This throws error if not an arrow function
                onChange={() => todoContext.checkTodo(todo)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
