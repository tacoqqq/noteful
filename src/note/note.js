import React, { Component } from 'react';
import './note.css';
import { Link } from 'react-router-dom';
import config from '../config';
import NotefulContext from '../notefulContext';
import PropTypes from 'prop-types';

class Note extends Component{
    static contextType = NotefulContext;

    handleDeleteNote = (noteId , callback) => {
        console.log(noteId)
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
            return response.json()
        })
        .then(data => {
            console.log(noteId)
            callback(noteId);
        })
        .catch(error => console.error(error))
    }

    render(){
        return (
                <div className="note">
                    <Link to={`/note/${this.props.id}`}>
                        <h2>{this.props.title}</h2>
                    </Link>
                    <div className="note-second-row">
                        <p>Date modified on {this.props.date}</p>
                        <button className="delete-button" onClick={() => this.handleDeleteNote(this.props.id , this.context.deleteNote)}>Delete Note</button>
                    </div>
                </div>

        )
    }
}

Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    folder: PropTypes.string.isRequired
}

export default Note;