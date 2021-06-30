import React from 'react'
import Note from './Note'
const NoteList = ({notes}) => {
    return (
        <div className='notelist'>
            {notes && notes.map(note => <Note note={note} key={note.id} />)}
            {/* notelist */}
        </div>
    )
}

export default NoteList
