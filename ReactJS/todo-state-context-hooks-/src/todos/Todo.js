import React, { Fragment } from 'react';

const Todo = ({ todo, handleChange }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Todo;
