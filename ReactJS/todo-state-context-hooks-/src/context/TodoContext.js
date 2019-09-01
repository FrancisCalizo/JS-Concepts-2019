import React, { useState, createContext } from 'react';
import initialTodos from '../api/Todos';

export const TodoContext = createContext();

export const TodoState = props => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
