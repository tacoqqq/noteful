import React, { Component } from 'react';
import './App.css';
import Main from './main/main';
import { Route } from 'react-router-dom';
//import STORE from './store.js';
import Header from './header/header';
import MainSidebar from './main-sidebar/mainSidebar';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NoteMain from './NoteMain/NoteMain';
import NotefulContext from './notefulContext';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import GoBack from './GoBack/GoBack';
import UpdateNote from './UpdateNote/UpdateNote';
import UpdateFolder from './UpdateFolder/UpdateFolder';
import Error from './Error';
import config from './config'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      folders: [],
      notes: [],
    }
  }
  
  handleDeleteNote = (noteId) => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes: newNotes
    })
  }

  handleAddFolder = (folder) => {
    const newFolders = [...this.state.folders, folder ]
    this.setState({
      folders: newFolders
    })
  }

  handleAddNote = (note) => {
    const newNotes = [...this.state.notes, note];
    this.setState({
      notes: newNotes
    })
  }

  handleUpdateNote = () => {
    fetch(`${config.API_ENDPOINT}/notes`)
      .then(response=> {
        if(!response.ok){
          throw new Error(response.status)
        }
        return (response.json())
      })
      .then(data => {
        this.setState({
          notes: data
        })
      })
      .catch(err => console.error(err))
  }

  handleDeleteFolder = (folderId) => {
    const newFolders = this.state.folders.filter(folder => folder.id !== folderId )
    const newNotes = this.state.notes.filter(note => note.folder_id !== folderId)
    this.setState({
      folders: newFolders,
      notes: newNotes
    })
  }

  handleUpdateFolder = (newFolderInfo) => {
    const newFolders = this.state.folders.map(folder => (folder.id !== Number(newFolderInfo.id)) ? folder : newFolderInfo )
    this.setState({
      folders: newFolders
    })
  }

  componentDidMount(){
    let notesArray = []
    let foldersArray = []

    fetch(`${config.API_ENDPOINT}/notes`)
      .then(response=> {
        if(!response.ok){
          throw new Error(response.status)
        }
        return (response.json())
      })
      .then(data => {
        notesArray = data
      })
      .then(response => {
        fetch(`${config.API_ENDPOINT}/folders`)
          .then(response => {
            if(!response.ok){
              throw new Error(response.status)
            }
            return (response.json())
          })
          .then(data => {
            foldersArray = data
          })
          .then(response => {
            this.setState({
              folders: foldersArray,
              notes: notesArray
            })
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }

  render(){
    return (
      <div className="App">
        <NotefulContext.Provider value={{
          folders: this.state.folders,
          notes: this.state.notes,
          deleteNote: this.handleDeleteNote,
          addFolder: this.handleAddFolder,
          addNote: this.handleAddNote,
          updateNote: this.handleUpdateNote,
          deleteFolder: this.handleDeleteFolder,
          updateFolder: this.handleUpdateFolder
        }}>
          <Header />
          <div className='content-section'>
            <nav>
              <Error>
                <Route exact path='/' component={MainSidebar} />
                <Route exact path='/folders/:folderId' component={MainSidebar} />
                <Route exact path='/notes/:noteId' component={NoteSidebar} />
                <Route path='/add-folder' component={GoBack} />     
                <Route path='/add-note' component={GoBack} />
                <Route path='/notes/:noteId/update' component={GoBack} />
                <Route path='/folders/:folderId/update' component={GoBack} />
              </Error>      
            </nav>
            <main>
              <Error>
                <Route exact path='/' component={Main} />
                <Route exact path='/folders/:folderId' component={Main} />
                <Route exact path='/notes/:noteId' component={NoteMain}/>
                <Route path='/add-folder' component={AddFolder} />     
                <Route path='/add-note' component={AddNote} />  
                <Route path='/notes/:noteId/update' component={UpdateNote} />  
                <Route path='/folders/:folderId/update' component={UpdateFolder} />
              </Error>
            </main>
          </div>
        </NotefulContext.Provider>
      </div>
    )
  }
}

export default App;
