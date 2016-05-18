import { connect } from 'react-redux'
import { toggleToDo } from '../actions'
import ToDoList from '../components/ToDoList'

// ToDoListPanel is considered a Container Component
// Meaning:
//   - It doesn't render any specific html
//   - It is responsible for subscribing to application state change
//   - It can dispatch actions
//   - It contains 'Presentation Components' or other Container Components

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToDoClick: (id) => {
            console.log('dispatch(toggleToDo(id))');
            dispatch(toggleToDo(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);
