import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions';

let input;

export default connect()(
    ({ dispatch }) => {
        return <form className='add-todo' onSubmit={e => {
            e.preventDefault();
            dispatch(addTodo(input.value));
        }}>
            <label>Message:</label>
            <input ref={node => {input = node}}></input>
            <input type='submit' value='Continue' />
        </form>
    }
)
