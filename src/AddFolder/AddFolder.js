import React, {Component} from 'react';
import uuid from 'uuid';
import NotefulContext from '../notefulContext';
import config from '../config';
import './AddFolder.css';


export default class AddFolder extends Component {
    constructor(props){
        super(props);
        this.state = {
            folderName: '',
        }
    }
    static contextType = NotefulContext;

    handleAddFolderName(inputName){
        this.setState({
            folderName: inputName
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const folderId = uuid.v4();
        const folderInfo = {
            id: folderId,
            name: event.target.folderName.value
        }
        fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'POST',
            body: JSON.stringify(folderInfo),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            if(!response.ok){
                throw new Error(`Failed at adding new folder. Please try again later.`)
            }
            return response.json()
        })
        .then(data => {
            this.props.history.push('/');
            this.context.addFolder(data);
        })
        .catch(err => console.error(err))
    }

    handleCancel = (event) => {
        this.props.history.push('/');
    }

    render(){
        return (
            <div className="add-folder-form">
                <h2>Add New Folder</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="folderName">Folder Name: </label>
                        <input 
                            id="folderName" 
                            name="folderName" 
                            type="textarea" 
                            onChange={(event) => this.handleAddFolderName(event.target.value)} required>
                        </input>
                    </div>
                    <div className="button-group">
                        <button type='submit'>Save</button>
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }

}