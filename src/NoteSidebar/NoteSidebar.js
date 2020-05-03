import React, { Component } from 'react';
import Note from '../note/note';
import Folder from '../folder/folder';
import './NoteSidebar.css';
import NotefulContext from '../notefulContext';
import { withRouter } from 'react-router-dom';

class NoteSidebar extends Component{
    static contextType = NotefulContext;
    
    onClickGoBack = () => {
        this.props.history.push('/')
    }

    render(){
        const folder = this.context.folders.length > 0 ? this.context.folders.find(folder => folder.id === (this.context.notes.find(note => note.id === Number(this.props.match.params.noteId)).folder_id)) : []

        return (
            <aside className="sidebar">
                <div className="button-container">
                    <button className='go-back-button' onClick={this.onClickGoBack}>Go Back</button>
                    <p>{folder.folder_name}</p>
                </div>
            </aside>
        )
    }

}
export default NoteSidebar;