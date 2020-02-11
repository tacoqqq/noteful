import React, { Component } from 'react';
import Folder from '../folder/folder';
import './sidebar.css';

class Sidebar extends Component {
    render(){
        const folders = this.props.folders.map( folder => <Folder key={folder.id} name={folder.name} id={folder.id}/> )
        return(

            <aside className="sidebar">
                <ul>
                    {folders}
                </ul>
                <button className='add-folder-button'>Add folder</button>
            </aside>
            
        )
    }
}

export default Sidebar;

