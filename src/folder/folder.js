import React, { Component } from 'react';
import './folder.css';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../notefulContext'
import PropTypes from 'prop-types';

class Folder extends Component {
    static contextType = NotefulContext;
    render(){
        return (
            <NavLink activeClassName="active" exact to={`/folders/${this.props.id}`}>
                <li>{this.props.name}</li>
            </NavLink>
        )
    }
}

export default Folder;

/*
Folder.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
}
*/
