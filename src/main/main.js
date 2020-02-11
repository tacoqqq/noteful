import React, { Component } from 'react';
import Note from '../note/note';
import './main.css';


class Main extends Component {
    render(){
        const notes = this.props.notes.map(note => 
            <Note 
                key={note.id} 
                id={note.id}
                title={note.name} 
                date={note.modified}/>
            )
        return (
            <div className="note-list">
                {notes}
                <button className="add-button">Add Note</button>
            </div>
        )
    }
}

export default Main;