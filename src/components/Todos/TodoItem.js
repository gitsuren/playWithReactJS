import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {

// function TodoItem(props){
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.todo.completed} onChange={()=>this.props.handleChange(this.props.todo.id)}/>
                <p>{this.props.todo.text}</p>
            </div>
        );
    }
}

// TodoItem.propTypes = {};

export default TodoItem;
