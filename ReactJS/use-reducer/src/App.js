import React from 'react';
import Todo from './todos/todos';
import TodoState from './context/TodoState';

const App = () => {
  return (
    <TodoState>
      <div>
        <Todo />
      </div>
    </TodoState>
  );
};

export default App;
