import React, { Component } from 'react';

import './item-add-panel.css'


export default class ItemAddPanel extends Component {

    state = {
        value: ''
    };

    addItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.value);
        this.setState({
            value: ''
        })
    };

    onChange = (e) => {
        this.setState({
                value: e.target.value
            })
    };



    render() {

        return (
            <div className = 'item-add-panel'>
                <form onSubmit = { this.addItem }>
                    <input type="text"
                           placeholder = 'Type to add'
                           className = "form-control"
                           onChange = { this.onChange }
                           value = { this.state.value }
                    />
                    <button className = 'btn btn-info add-item'>Add item</button>
                </form>
            </div>
        )
    }
}



