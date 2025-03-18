import React, { useState } from 'react';
import styles from './Homepage.module.scss';
import './homepage.css';
import NoteItem from '../../components/NoteItem';
import NoteEditor from '../../components/NoteEditor';
import AddNoteItem from '../../components/AddNoteItem';


interface HomeState {
  text: string;
  button: string;
}

function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4">
      <div className="col-span-1 lg:col-span-1">
        <button onClick={() => setIsModalOpen(true)}>Add Note</button>
        <NoteItem />
      </div>
      <div className="h-screen bg-white bg-forest p-10 col-span-2 lg:col-span-3">
        <NoteEditor />
      </div>
      <AddNoteItem
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Homepage;