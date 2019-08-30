import React, {useReducer, Fragment} from 'react';

// Inital State
const initialTodos = [
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
        if(todo.id === action.payload.id){
          return {
            ...todo, complete: true
          }
        } else {
          return todo;
        }
      })
    case 'UNDO_TODO':
        return state.map(todo => {
          if(todo.id === action.payload.id){
            return {
              ...todo, complete: false
            }
          } else {
            return todo;
          }
        })
    default:
      return state;
  }
}

const App = () => {

  const [currentState, dispatch] = useReducer(todoReducer, initialTodos)

  const onChange = (todo) => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      payload: {
        id: todo.id
      }
    })
  }

  return (
    <Fragment>
      <ul style={style}>
        {currentState.map(todo => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.complete} onChange={()=> onChange(todo)}/>
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const style = {
  listStyleType: 'none'
}

export default App;
