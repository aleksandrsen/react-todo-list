import React, { Component } from 'react';

import './sort-items.css'


export default class SortItems extends Component {


    render() {

        return (
            <div className = 'sort-items'>
                <select>
                    <option value="date">Sort by Date</option>
                    <option value="name">Sort by name</option>
                </select>
            </div>
        )
    }
}



