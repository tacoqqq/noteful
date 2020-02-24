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
import Error from './Error';


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
    console.log(newNotes);
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

  componentDidMount(){
    fetch('http://localhost:9090/folders')
      .then(response => {
        if(!response.ok){
          throw new Error(response.status)
        }
        return (response.json())
      })
      .then(data => {
        this.setState({
          folders: data
        })
        fetch('http://localhost:9090/notes')
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
          addNote: this.handleAddNote
        }}>
          <Header />
          <div className='content-section'>
            <nav>
              <Error>
                <Route exact path='/' component={MainSidebar} />
                <Route path='/folder/:folderId' component={MainSidebar} />
                <Route path='/note/:noteId' component={NoteSidebar} />   
                <Route path='/add-folder' component={GoBack} />     
                <Route path='/add-note' component={GoBack} />
              </Error>      
            </nav>
            <main>
              <Error>
                <Route exact path='/' component={Main} />
                <Route path='/folder/:folderId' component={Main} />
                <Route path='/note/:noteId' component={NoteMain}/>
                <Route path='/add-folder' component={AddFolder} />     
                <Route path='/add-note' component={AddNote} />  
              </Error>
            </main>
          </div>
        </NotefulContext.Provider>
      </div>
    )
  }
}

export default App;
