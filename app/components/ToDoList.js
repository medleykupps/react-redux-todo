/* ----
 * ToDoList is a Presentaton Component
 * It accepts two properties:
 *   - An array of todos
 *   - A click handler event for when the todo item is clicked
 */

import React, { PropTypes } from 'react';

const ToDoList = ({todos, onToDoClick}) => {
    return <ul className='todos'>
        {todos.map(todo =>
            <li>
                <p>{todo.text}<span>{todo.complete}</span></p>
            </li>
        )}    
    </ul>
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        complete: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onToDoClick: PropTypes.func.isRequired
};

export default ToDoList;
