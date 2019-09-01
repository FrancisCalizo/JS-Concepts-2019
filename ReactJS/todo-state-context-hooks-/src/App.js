// Uses useState Hook
import React, { useState } from 'react';
import initialTodos from './api/Todos';
import TodoList from './todos/TodoList';
import { TodoState } from './context/TodoContext';

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
    <TodoState>
      <div>
        <h1>Todo List</h1>
        <TodoList todos={todos} handleChange={handleChange} />
      </div>
    </TodoState>
  );
};

export default App;
