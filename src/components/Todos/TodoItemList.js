import React, {Component} from 'react';
import PropTypes from 'prop-types';
import todosData from "./todosData";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {

    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(id) {
    //     this.setState(prevState => {
    //         const updatedTodos = prevState.todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.completed = !todo.completed
    //             }
    //             return todo
    //         })
    //         return {
    //             todos: updatedTodos
    //         }
    //     })
    // }

    // Toggle Complete
    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    render() {

        let todos = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}/>);

        return (
            <div>
                {todos}
            </div>
        );
    }
}

TodoItemList.propTypes = {};

export default TodoItemList;
