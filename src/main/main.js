import React, { Component } from 'react';
import Note from '../note/note';
import './main.css';
import NotefulContext from '../notefulContext';
import AddNote from '../AddNote/AddNote';
import { Link } from 'react-router-dom';

class Main extends Component {
    static contextType = NotefulContext;

    render(){
        const noteList = this.props.match.params.folderId 
            ? this.context.notes.filter(note => note.folderId === this.props.match.params.folderId) 
            : this.context.notes;
        const notes = noteList.map(note => 
            <Note 
                key={note.id} 
                id={note.id}
                title={note.name} 
                date={note.modified}/>
            )
        return (
            <div className="note-list-container">
                <div className="note-list">
                    {notes}
                    <Link to={'/add-note'}><button className="add-button">Add Note</button></Link>
                </div>
            </div>
        )
    }
}

export default Main;