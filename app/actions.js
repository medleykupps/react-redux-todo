export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleToDo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

let nextTodoId = 1;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }    
} 
