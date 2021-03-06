import React, {Component} from 'react';
import NotefulContext from '../notefulContext';
import './AddNote.css'
import config from '../config'

export default class AddNote extends Component {

    static contextType = NotefulContext;

    constructor(props){
        super(props);
        this.state = {
            note: {
                title: "",
                content: "",
                folder: "Super Important",
                errorMsg: ""
            }
        }
    }

    updateTitle(value) {
        this.setState({
            note: {
                title: value,
                content: this.state.note.content,
                folder: this.state.note.folder
            }
        })
    }

    updateContent(value) {
        this.setState({
            note: {
                title: this.state.note.title,
                content: value,
                folder: this.state.note.folder
            }
        })
    }  

    updateFolderOption(value) {
        this.setState({
            note: {
                title: this.state.note.title,
                content: this.state.note.content,
                folder: value
            }
        })
    }    

    validateTitle = () => {
        this.setState({
            note: {
                title: this.state.note.title,
                content: this.state.note.content,
                folder: this.state.note.folder,
            }
        })
        if (this.state.note.title.length === 0){
            this.setState({
                note: {
                    title: this.state.note.title,
                    content: this.state.note.content,
                    folder: this.state.note.folder,
                    errorMsg: "Title is required!"
                }
            })
        }
        else{
            this.setState({
                note: {
                    title: this.state.note.title,
                    content: this.state.note.content,
                    folder: this.state.note.folder,
                    errorMsg: ""
                }
            })
        }
    }


    handleSubmitNote(e){
        e.preventDefault();
        this.validateTitle();
        if (this.state.note.title.length !== 0){
            const folder_id = (this.context.folders.find(folder => folder.folder_name === this.state.note.folder)).id
            const data = {
                title: this.state.note.title,
                folder_id: folder_id,
                content: this.state.note.content
            }

            fetch(`${config.API_ENDPOINT}/notes`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(response => {
                    if(!response.ok) {
                        throw new Error( `Something went wrong. please try again later.`)
                    }
                    return response.json()
                })
                .then(data => {
                    this.context.addNote(data);
                    this.props.history.push('/')
                } )
                .catch(err => console.error(err))
        }
    }

    handleCancel = () => {
        this.props.history.push('/');
    }

    render(){
        const folderOptions = this.context.folders.map((folder,i) => <option key={i} value={folder.folder_name}>{folder.folder_name}</option>);
        return(
            <div className="add-note-container">
                <h2>Add New Note</h2>
                <form onSubmit={(e) => {this.handleSubmitNote(e)}}>
                    <div className="form-section">
                        <label htmlFor='noteTitle'>Title: </label>
                        <input 
                            type="textarea" 
                            id='noteTitle' 
                            name='noteTitle' 
                            onChange={(e) => this.updateTitle(e.target.value)}>
                        </input>
                        <div className="error-message">{this.state.note.errorMsg}</div>
                    </div>
                    <div className="form-section">
                        <label htmlFor='noteContent'>Content: </label>
                        <input 
                            type="textarea" 
                            id='noteContent' 
                            name='noteContent' 
                            rows="10" 
                            cols="30"
                            onChange={(e) => this.updateContent(e.target.value)}>
                        </input>
                    </div>    
                    <div className="form-section">
                        <label htmlFor='selectFolder'>Save in which folder: </label>
                        <select 
                            id='selectFolder' 
                            name='selectFolder'
                            onChange={(e) => this.updateFolderOption(e.target.value)}
                            required>
                            <option value="">Select</option>
                            {folderOptions}
                        </select>
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
