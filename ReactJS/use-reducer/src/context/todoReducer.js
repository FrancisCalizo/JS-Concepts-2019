import { DO_TODO, UNDO_TODO } from './types';

export default (state, action) => {
  switch (action.type) {
    case DO_TODO:
      return state.todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
