import React from 'react';

const notes = [
    { id: 1, title: 'Note Title 1', date: '19.01.2025' },
    { id: 2, title: 'Note Title 2', date: '20.01.2025' },
    { id: 3, title: 'Note Title 3', date: '21.01.2025' },
    { id: 4, title: 'Note Title 5', date: '22.01.2025' },
];

function NoteItem() {
    return (
        <>
            {notes.map((note) => (
                <div key={note.id} className="bg-slate-50 hover:bg-slate-100 mb-2 p-4 border border-slate-200 rounded ">
                    <div className="flex justify-between items-center pb-4">
                        <div className="note-title">
                            <h2 className="text-sky-700 font-light">{note.title}</h2>
                        </div>
                        <button className="text-red-800 hover:text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-400 text-xs pt-4 italic">{note.date}</p>
                </div>
            ))}
            <div className="bg-slate-50 mb-2 p-4 border border-slate-300 rounded shadow">
                <div className="flex justify-between items-center pb-4">
                    <div className="note-title">
                        <h2 className="font-medium text-sky-900">Note Title</h2>
                    </div>
                    <button className="text-red-800 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <p className="border-t border-t-sky-900 text-gray-700 text-xs pt-2 italic">19.01.2025</p>
            </div>
        </>
    )
}

export default NoteItem;