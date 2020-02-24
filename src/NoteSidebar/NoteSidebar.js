import React, {Component} from 'react';
import './NoteSidebar.css';
import { withRouter } from 'react-router-dom';
import NotefulContext from '../notefulContext';


class NoteSidebar extends Component{
    static contextType = NotefulContext;
    

    onClickGoBack = () => {
        this.props.history.push('/')
    }

    render(){
        const folder = this.context.folders.find(folder => folder.id === (this.context.notes.find(note => note.id === this.props.match.params.noteId).folderId))

        return(
            <aside className="sidebar">
                <div className="button-container">
                    <button className='go-back-button' onClick={this.onClickGoBack}>Go Back</button>
                    <p>{folder.name}</p>
                </div>
            </aside>
        )
    }
}

export default withRouter(NoteSidebar);