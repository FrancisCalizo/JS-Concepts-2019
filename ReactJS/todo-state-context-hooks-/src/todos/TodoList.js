import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleChange }) => {
  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} handleChange={handleChange} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
