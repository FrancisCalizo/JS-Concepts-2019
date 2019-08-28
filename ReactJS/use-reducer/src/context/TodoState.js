import React, { useReducer, useEffect } from 'react';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';
import { DO_TODO, UNDO_TODO } from './types';

const TodoState = props => {
  const initialState = {
    todos: [
      {
        id: 'a',
        task: 'Learn React',
        complete: false
      },
      {
        id: 'b',
        task: 'Learn GraphQL',
        complete: false
      }
    ]
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const checkTodo = todo => {
    dispatch({
      type: DO_TODO,
      id: todo.id
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        checkTodo: checkTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
