import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import './NoteMain.css';
import NotefulContext from '../notefulContext';
import PropTypes from 'prop-types';


class NoteMain extends Component {
    static contextType = NotefulContext;

    handleDeleteNote = (noteId , callback) => {
        //console.log('noteId = ' + noteId)
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
            //console.log('innoteid')
            this.props.history.push('/')
            callback(noteId);
        })
        .catch(error => console.error(error))
    }

    render(){
        const note = this.context.notes.length > 0 ? this.context.notes.find(note => note.id === Number(this.props.match.params.noteId)) : []
        console.log(this.context)
        return(
                <>
                    <div className="note">
                        <Link to={`/notes/${note.id}`}>
                            <h2>{note.title}</h2>
                        </Link>
                        <div className="note-second-row">
                            <p>Date modified on {note.created_time}</p>
                            <div className="button-container">
                                <button className="update-button"><Link to={`/notes/${note.id}/update`}>Update</Link></button>
                                <button className="delete-button" onClick={() => this.handleDeleteNote(note.id , this.context.deleteNote)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <p className="note-content">{note.content}</p>
                </>
        )
    }
}

export default NoteMain;

/*
NoteMain.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    folder: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
*/