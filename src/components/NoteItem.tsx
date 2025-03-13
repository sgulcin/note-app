import React, { useState} from 'react';

const initialNotes = [
    { id: 1, title: 'Note Title 1', date: '19.01.2025' },
    { id: 2, title: 'Note Title 2', date: '20.01.2025' },
    { id: 3, title: 'Note Title 3', date: '21.01.2025' },
    { id: 4, title: 'Note Title 5', date: '22.01.2025' },
];

function NoteItem() {
    const [notes, setNotes] = useState(initialNotes);
    const [activeNote, setActiveNote] = useState(notes[0]);

    const handleNoteClick = (note:any) => {
        setActiveNote(note);        
    }

    const handleDeleteNote = (note:any) => {
        const remainingNotes = notes.filter((n) => n.id !== note.id);
        setNotes(remainingNotes);
        if (activeNote?.id === note.id) {
            setActiveNote(notes[0]);
        }   
    }

    return (
        <>
            {notes.map((note) => (
                <div key={note.id} 
                    onClick={() => handleNoteClick(note)}
                    className={`bg-slate-50 hover:bg-slate-100 mb-2 p-4 ${activeNote?.id === note.id ? 'shadow active-note' : ''}`}   
                    >
                    <div className="flex justify-between items-center pb-4">
                        <div className="note-title">
                            <h2 className={`${activeNote?.id === note.id ? 'font-medium text-sky-900' : 'text-sky-700 font-light'}`}>
                                {note.title}
                            </h2>
                        </div>
                        <button className="text-red-800 hover:text-red-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteNote(note);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className={`border-t border-t-sky-900 pt-2 italic text-xs ${activeNote?.id === note.id ? 'text-gray-700' : 'text-gray-400'}`}>{note.date}</p>
                </div>
            ))}
        </>
    )
}

export default NoteItem;