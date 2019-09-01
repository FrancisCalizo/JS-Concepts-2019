// Uses useState Hook
import React from 'react';
import TodoList from './todos/TodoList';
import { TodoState } from './context/TodoContext';

const App = () => {
  return (
    <TodoState>
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </TodoState>
  );
};

export default App;
