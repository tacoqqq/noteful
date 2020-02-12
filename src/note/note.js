import React, { Component } from 'react';
import './note.css';
import { Link } from 'react-router-dom';

class Note extends Component{
    render(){
        return (
            <Link to={process.env.PUBLIC_URL + `/note/${this.props.id}`}>
                <div className="note">
                    <h2>{this.props.title}</h2>
                    <div className="note-second-row">
                        <p>Date modified on {this.props.date}</p>
                        <button className="delete-button">Delete Note</button>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Note;