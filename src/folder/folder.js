import React, { Component } from 'react';
import './folder.css';
import { NavLink } from 'react-router-dom';

class Folder extends Component {
    render(){
        return (
            <NavLink activeClassName="active" exact to={`/folder/${this.props.id}`}>
                <li>{this.props.name}</li>
            </NavLink>
        )
    }
}

export default Folder;