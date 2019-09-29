import React, { Component } from 'react';

import './filter-items.css'


export default class FilterItems extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];



    render() {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({name, label}) => {
           const isActive = filter === name;
           const clazz = isActive ? 'btn-info' : 'btn-secondary';

           return <button type = 'button'
                          className = { `btn ${clazz}` }
                          key = { name }
                          onClick = { () => onFilterChange(name) }
           >{ label }</button>
        });



        return (
            <div className = 'filter-items'>
                { buttons }
            </div>
        )
    }
}



