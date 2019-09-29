import React, {Component} from 'react';
import TodoListItem from '../todo-list-item'

import './todo-list.css'
export default class TodoList extends Component {


    render() {
        let { todos,
            onDeleteItem,
            onToogleImportant,
            onToogleDone,
            onEditItem } = this.props;

        let items = todos.map((todo) => {
            let {id, ...todoItem} = todo;

            return (
                <TodoListItem
                    key = { id }
                    todo = { todoItem }
                    onDeleteItem = { () => onDeleteItem(id) }
                    onToogleImportant = { () =>  onToogleImportant(id) }
                    onToogleDone = { () =>  onToogleDone(id) }
                    onEditItem = { () => { onEditItem(id) } }
                 />
            )
        });

        if (!items.length) {
            return <h2 className = 'no-items'>Here are no tasks</h2>
        }

        return (
            <ul className = 'todo-list'>
                { items }
            </ul>
        )
    }
}