import React, { Component } from 'react';
import './folder.css';
import { NavLink, Link } from 'react-router-dom';
import NotefulContext from '../notefulContext'
import PropTypes from 'prop-types';
import config from '../config';
import { withRouter } from 'react-router'

class Folder extends Component {
    static contextType = NotefulContext;

    onClickDelete = () => {
        fetch(`${config.API_ENDPOINT}/folders/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok){
                throw new Error(response.error)
            }
            return response
        })
        .then(res => {
            this.context.deleteFolder(this.props.id)
            this.props.history.push('/')
        })
        .catch(err => {
            console.error(err.message)
        })
    }

    render(){
        const buttons = Number(this.props.params) === this.props.id ? 
            <div className="folder-button-group">
                <Link to={`${this.props.id}/update`}><button>Update Folder Name</button></Link>
                <button onClick={this.onClickDelete}>Delete Folder</button>
            </div> 
            : null
        return (
            <NavLink activeClassName="active" exact to={`/folders/${this.props.id}`}>
                <li>{this.props.name}</li>
                { buttons }
            </NavLink>
        )
    }
}

export default withRouter(Folder);

/*
Folder.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
}
*/
