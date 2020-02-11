import React, { Component } from 'react';
import './App.css';
import Main from './main/main';
import { Route } from 'react-router-dom';
import STORE from './store.js';
import Header from './header/header';
import MainSidebar from './main-sidebar/mainSidebar';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NoteMain from './NoteMain/NoteMain';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      folders: STORE.folders,
      notes: STORE.notes,
    }
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <div className='content-section'>
          <nav>
            <Route exact path="/" render={() => <MainSidebar folders={this.state.folders}/>} />
            <Route path="/folder/:folderId" render={() => <MainSidebar folders={this.state.folders}/>} />
            <Route path="/note/:noteId" render={(props) => {
              return <NoteSidebar
                folder={this.state.folders.find(folder => folder.id === (this.state.notes.find(note => note.id === props.match.params.noteId)).folderId)}                 
              />
              } 
              }/>
          </nav>
          <main>
            <Route exact path="/" render={() => <Main notes={this.state.notes} />} />
            <Route path="/folder/:folderId" render={(props) => <Main notes={this.state.notes.filter(note => note.folderId === props.match.params.folderId)} />} />
            <Route path="/note/:noteId" render={(props) => <NoteMain note={this.state.notes.find(note => note.id === props.match.params.noteId)}/>} />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
