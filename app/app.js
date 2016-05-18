import { createStore } from 'redux' // Used to create application store
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { ADD_TODO } from 'actions';
import ToDoListPanel from './components/ToDoListPanel'; 
import AddToDoForm from './components/AddToDoForm';

// Reducers ------
// The main reducer
// Initially, called with state is undefined
// Defines the general shape of the state
// Allows other reducers to provide defaults and update state of specific parts of the state tree
function todoApp(state = {}, action) {
    return {
        todos: reduceTodos(state.todos, action)
    };
}

// Todo reducer
// Handles actions relating to the todo items in the state tree
function reduceTodos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    complete: false
                }
            ];
        default:
            return state;
    }    
}


// Store ------
// The Store is responsible for storing the application state
// Provides getState() method in order to access application state
// Allows state to be updated via dispatch(action) method
// Registers listeners via subscribe(listener)
// Unregisters listeners via unsubscribe(listener)
// Only 1 Store in an application

let store = createStore(todoApp);


// react Components
const App = () => (
    <div>
        <p>App</p>
        <AddToDoForm />
        <ToDoListPanel />
    </div>
)


ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
