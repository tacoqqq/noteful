import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import './NoteMain.css';
import NotefulContext from '../notefulContext';
import PropTypes from 'prop-types';


class NoteMain extends Component {
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
            console.log('innoteid')
            this.props.history.push('/')
            callback(noteId);
        })
        .catch(error => console.error(error))
    }

    render(){
        const note = this.context.notes.find(note => note.id === this.props.match.params.noteId)
        return(
                <>
                    <div className="note">
                        <Link to={`/note/${note.id}`}>
                            <h2>{note.name}</h2>
                        </Link>
                        <div className="note-second-row">
                            <p>Date modified on {note.modified}</p>
                            <button className="delete-button" onClick={() => this.handleDeleteNote(note.id , this.context.deleteNote)}>Delete Note</button>
                        </div>
                    </div>
                    <p className="note-content">{note.content}</p>
                </>
        )
    }
}

export default NoteMain;

NoteMain.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    folder: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
