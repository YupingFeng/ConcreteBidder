import React, { Component } from 'react';
import './index.css';

export default class TableHeader extends Component {
    render(){
        return (      
            <th>{this.props.head}</th>
        )
    }
}  