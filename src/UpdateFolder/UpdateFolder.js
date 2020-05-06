import React, { Component } from 'react';
import NotefulContext from '../notefulContext'
import config from '../config';
import './UpdateFolder.css'

class UpdateFolder extends Component {
    static contextType = NotefulContext

    state = {
        folderName: ""
    }

    handleUpdateFolderName(inputName){
        this.setState({
            folderName: inputName
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const folderInfo = {
            id: this.props.match.params.folderId,
            folder_name: event.target.folderName.value,
            created_time: new Date().toISOString()
        }
        fetch(`${config.API_ENDPOINT}/folders/${this.props.match.params.folderId}`, {
            method: 'PATCH',
            body: JSON.stringify(folderInfo),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            if(!response.ok){
                throw new Error(`Failed at updating new folder. Please try again later.`)
            }
            return response
        })
        .then(data => {
            this.props.history.push('/');
            this.context.updateFolder(folderInfo);
        })
        .catch(err => console.error(err))
    }

    handleCancel = (event) => {
        this.props.history.push('/');
    }

    insertOriginalContent = (folder) => {
        this.setState({
            folderName: folder.folder_name
        })
    }

    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/folders/${this.props.match.params.folderId}`)
        .then(response => {
            if (!response.ok){
                throw new Error(response.error)
            }
            return response.json()
        })
        .then(folder => {
            this.insertOriginalContent(folder)
        })
        .catch(err => {
            console.error(err.message)
        })
    }


    render(){
        return (
            <div className="update-folder-form">
                <h2>Update New Folder</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="folderName">Folder Name: </label>
                        <input 
                            id="folderName" 
                            name="folderName" 
                            type="textarea" 
                            defaultValue={this.state.folderName}
                            onChange={(event) => this.handleUpdateFolderName(event.target.value)} 
                            required>
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

export default UpdateFolder;
