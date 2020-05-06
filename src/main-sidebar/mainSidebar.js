import React, { Component } from 'react';
import Folder from '../folder/folder';
import './mainSidebar.css';
import NotefulContext from '../notefulContext';
import { Link } from 'react-router-dom';

class MainSidebar extends Component {
    static contextType = NotefulContext;
    
    render(){
        const folders = this.context.folders.map( folder => 
            <Folder 
                key={folder.id} 
                id={folder.id}
                params={this.props.match.params.folderId ? this.props.match.params.folderId : null}
                name={folder.folder_name}
            /> )
        return(
            <aside className="sidebar">
                <ul>
                    {folders}
                </ul>
                <div className="button-container">
                    <Link to={'/add-folder'}><button className='add-folder-button'>Add folder</button></Link>
                </div>
            </aside>
        )
    }
}


export default MainSidebar;
