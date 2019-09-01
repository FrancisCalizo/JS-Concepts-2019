import React, { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const handleChange = id => {
    const temporaryTodos = todos.map(todo => {
      todo.id === id && (todo.completed = !todo.completed);
      return todo;
    });

    setTodos(temporaryTodos);
  };

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
