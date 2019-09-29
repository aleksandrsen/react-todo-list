import React, { Component } from 'react';

import './search-panel.css'


export default class SearchPanel extends Component {

    state = {
      term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {

        return (
            <form className = 'search-panel'>
                <input type = "text"
                       placeholder = 'Type to search'
                       className = "form-control"
                       onChange = { this.onSearchChange }
                       value = { this.state.term }
                />
            </form>

        )
    }
}






