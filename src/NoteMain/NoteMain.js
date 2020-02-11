import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteMain.css';


class NoteMain extends Component {
    render(){
        return(
            <Link to={`/note/${this.props.note.id}`}>
                <div className="note">
                    <h2>{this.props.note.name}</h2>
                    <div className="note-second-row">
                        <p>Date modified on {this.props.note.modified}</p>
                        <button className="delete-button">Delete Note</button>
                    </div>
                </div>
                <p className="note-content">{this.props.note.content}</p>
            </Link>
        )
    }
}

export default NoteMain;