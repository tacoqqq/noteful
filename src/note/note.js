import React, { Component } from 'react';
import './note.css';
import { Link } from 'react-router-dom';
import config from '../config';
import NotefulContext from '../notefulContext';
import PropTypes from 'prop-types';

class Note extends Component{
    static contextType = NotefulContext;
    handleDeleteNote = (noteId , callback) => {
        fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
          })
        .then(response => {
            if (!response.ok){
                throw new Error(response.status)
            }
        })
        .then(data => {
            callback(noteId);
        })
        .catch(error => console.error(error))
    }

    render(){
        return (
                <div className="note">
                    <Link to={`/notes/${this.props.id}`}>
                        <h2>{this.props.title}</h2>
                    </Link>
                    <div className="note-second-row">
                        <p>Date modified on {this.props.date}</p>
                        <div className="button-container">
                            <button className="update-button"><Link to={`/notes/${this.props.id}/update`}>Update</Link></button>
                            <button className="delete-button" onClick={() => this.handleDeleteNote(this.props.id , this.context.deleteNote)}>Delete</button>
                        </div>
                    </div>
                </div>

        )
    }
}

/*
Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created_time: PropTypes.string.isRequired,
    folder_id: PropTypes.string.isRequired
}
*/

export default Note;
