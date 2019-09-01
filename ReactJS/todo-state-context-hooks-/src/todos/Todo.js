import React, { Fragment } from 'react';

const Todo = ({ todo, handleChange }) => {
  return (
    <div>
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChange(todo.id)}
          />
          {todo.task}
        </label>
      </li>
    </div>
  );
};

export default Todo;
