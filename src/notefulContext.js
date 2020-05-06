import React from 'react';

const NotefulContext = React.createContext({
    notes: [],
    folders: [],
    deleteNote: () => {},
    addFolder: () => {},
    addNote: () => {},
    updateNote: () => {},
    deleteFolder: () => {},
    updateFolder: () => {}
})

export default NotefulContext;