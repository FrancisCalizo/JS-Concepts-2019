import React from 'react';

const App = () => {

  // Inital State
  const todos = [
    {
      id: 'a',
      task: 'Learn React',
      complete: false,
    },
    {
      id: 'b',
      task: 'Learn Firebase',
      complete: false,
    },
  ];

  const todoReducer = (state, action) => {
    switch(action.type){
      case 'DO_TODO':
        return state.map(todo => {
          if(todo.id === action.id){
            return {
              ...todo, complete: true
            }
          } else {
            return todo;
          }
        })
        default:
          return state;
    }
  }

  const action = {
    type: 'DO_TODO',
    id: 'a'
  }

  const result = todoReducer(todos, action)

  return (
      <div>
        {result.map(todo => (
          <h1 key={todo.id}>{todo.id} - {todo.task} - {todo.complete.toString()}</h1>
        ))}
        {console.log({todos})}
      </div>
  );
};

export default App;
