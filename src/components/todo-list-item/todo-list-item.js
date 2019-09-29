import React, {Component} from 'react';
import TodoListItemFooter from '../todo-list-item-footer'

import './todo-list-item.css'


export default class TodoListItem extends Component {

    state = {
        isEdit: false
    };


    onEditItem = () => {
        this.setState((state) => {
            return {
                isEdit: !state.isEdit
            }
        });

        this.props.onEditItem();
    };



    render() {
        let { todo,
            onDeleteItem,
            ...eventHandlers} = this.props;

        let classNames = 'todo-list-item';

        if (todo.done) {
            classNames += ' done '
        }

        if (todo.important) {
            classNames += ' important '
        }

        if (this.state.isEdit) {
            classNames += ' edited '

        }
        
            return (
                <div className= {`card ${classNames}`}>
                    <div className="card-body">
                        <span className="card-text" onClick = { this.onEditItem }>{ todo.label }</span>
                        <i className="fas fa-times" onClick = { onDeleteItem }></i>
                    </div>
                    <TodoListItemFooter eventHandlers = { eventHandlers }/>
                </div>
            )
    }
};



