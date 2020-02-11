import React, { Component } from 'react';
import Folder from '../folder/folder';
import './mainSidebar.css';

class MainSidebar extends Component {
    render(){
        const folders = this.props.folders.map( folder => 
            <Folder 
                key={folder.id} 
                id={folder.id}
                name={folder.name}
            /> )
        return(
            <aside className="sidebar">
                <ul>
                    {folders}
                </ul>
                <div className="button-container">
                    <button className='add-folder-button'>Add folder</button>
                </div>
            </aside>
        )
    }
}

export default MainSidebar;