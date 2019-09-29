import React, {Component} from 'react';
import './todo-list-item-footer.css'

export default class TodoListItemFooter extends Component {



    render() {

        let {onToogleImportant, onToogleDone } = this.props.eventHandlers;


        return (
            <div className = 'todo-list-item-footer'>

                <span>
                    <i className="fas fa-exclamation"
                       onClick = { onToogleImportant }>

                    </i>
                </span>

                <span>
                    <label className = 'change-color'>
                        <i className="fas fa-palette">
                            <input type = "color"/>
                        </i>
                    </label>
                </span>

                <span>
                    <i className="fas fa-check"
                       onClick = { onToogleDone }>
                    </i>
                </span>
        </div>
        )
    }
}

