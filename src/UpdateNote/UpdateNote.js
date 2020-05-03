import React, {Component} from 'react';
import NotefulContext from '../notefulContext';
import './UpdateNote.css'
import config from '../config'

export default class UpdateNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            note: {
                title: "",
                content: "",
                folder: "",
                errorMsg: ""
            }
        }
    }

    static contextType = NotefulContext;

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
        console.log('in update folder')
        console.log(value)
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
            console.log(this.state.note.folder)
            const data = {
                title: this.state.note.title,
                folder_id: folder_id,
                content: this.state.note.content
            }

            fetch(`${config.API_ENDPOINT}/notes/${this.props.match.params.noteId}`, {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(response => {
                    if(!response.ok) {
                        throw new Error( `Something went wrong. please try again later.`)
                    }
                })
                .then(data => {
                    this.context.updateNote();
                    this.props.history.push('/')
                } )
                .catch(err => console.error(err))
        }
    }

    handleCancel = () => {
        this.props.history.push('/');
    }

    insertOriginalContent = (content) => {
        this.setState({
            note: {
                title: content.title,
                content: content.content,
                folder: this.context.folders.find(folder => folder.id === content.folder_id).folder_name,
                errorMsg: ""
            }
        })
    }

    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/notes/${this.props.match.params.noteId}`)
            .then(res => {
                if (!res.ok){
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(note => {
                this.insertOriginalContent(note)
            })
            .catch(error => {
                this.setState({
                    note: {
                        title: "",
                        content: "",
                        folder: "",
                        errorMsg: error.message
                    }
                })
            })
    }

    render(){
        const folderOptions = this.context.folders.map((folder,i) => <option key={i} value={folder.folder_name}>{folder.folder_name}</option>);
        console.log(this.state.note.folder)
        return(
            <div className="update-note-container">
                <h2>Update Note</h2>
                <form onSubmit={(e) => {this.handleSubmitNote(e)}}>
                    <div className="form-section">
                        <label htmlFor='noteTitle'>Title: </label>
                        <input 
                            type="textarea" 
                            id='noteTitle' 
                            name='noteTitle' 
                            defaultValue={this.state.note.title}
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
                            defaultValue={this.state.note.content}
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