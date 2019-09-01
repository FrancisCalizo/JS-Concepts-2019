import React, { Fragment, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Todo = ({ todo, handleChange }) => {
  const value = useContext(TodoContext);

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
