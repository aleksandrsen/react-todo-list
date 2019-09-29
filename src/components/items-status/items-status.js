import React, { Component } from 'react';

import './items-status.css'


export default class ItemsStatus extends Component {


    render() {

        let {done, all} = this.props;

        return (
            <div className = 'items-status'>
               <span>All
                   <span className = 'big all'> {all}</span> tasks, done
                   <span className = 'big done-items'> {done}</span> tasks.</span>
            </div>
        )
    }
}



