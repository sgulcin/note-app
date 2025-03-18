import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { RootState } from '../store/rootReducer';   
import { addNote, removeNote, updateNote, setActiveNote, fetchNotes } from '../store/noteItemSlice';

function NoteItem() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error, activeNoteId } = useSelector((state: RootState) => state.noteItem);

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    const handleNoteClick = (note:any) => {
        dispatch(setActiveNote(note._id));       
    }

    const handleDeleteNote = (note: any) => {
        dispatch(removeNote(note._id));
        if (activeNoteId === note._id) {
            dispatch(setActiveNote(items[0]?._id));
        }
    };

    return (
        <>
            {items.map((note) => (
                <div key={note._id} 
                    onClick={() => handleNoteClick(note)}
                    className={`bg-slate-50 hover:bg-slate-100 mb-2 p-4 ${activeNoteId === note._id ? 'shadow active-note' : ''}`}   
                    >
                    <div className="flex justify-between items-center pb-4">
                        <div className="note-title">
                            <h2 className={`${activeNoteId === note._id ? 'font-medium text-sky-900' : 'text-sky-700 font-light'}`}>
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
                    <p className={`border-t border-t-sky-900 pt-2 italic text-xs ${activeNoteId === note._id ? 'text-gray-700' : 'text-gray-400'}`}>{note.date}</p>
                </div>
            ))}
        </>
    )
}

export default NoteItem;