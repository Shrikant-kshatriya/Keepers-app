import React, { useState } from 'react'
import Header from './Header.jsx'
import Note from './Note.jsx'
import Footer from './Footer.jsx'
import CreateArea from './CreateArea.jsx'

function App(){

    const [notesArray, setNotesArray] = useState([]);

    function deleteNote(id){
        setNotesArray(prevNotes => {
            return prevNotes.filter((note, index) => {
                return (id !== index)
            });
        });
    }
    function addNote(note){
        setNotesArray(prevNotes => {
            return [...prevNotes, note];
        });
    }

    return (
    <div>
        <Header />
        <CreateArea  addNote={addNote} />
        {notesArray.map((note, index) => {
            return (
                <Note key={index} id={index} deleteNote={deleteNote} title={note.title} content={note.content} />
            )
        })}
        
        <Footer />
    </div>
    );
}

export default App;