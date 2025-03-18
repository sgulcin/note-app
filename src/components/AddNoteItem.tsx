import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addNote } from '../store/noteItemSlice';
import axiosInstance from '../axiosConfig';
import styles from './AddNoteItem.module.scss';

interface AddNoteItemProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function AddNoteItem ({ isOpen, onRequestClose }: AddNoteItemProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [note, setNote] = useState({ title: '', date: '', content: '' });
  
  const handleAddNote = async () => {
      try {
        const response = await axiosInstance.post('/notes', note);
        dispatch(addNote(response.data));
        onRequestClose();
      } catch (error) {
        console.error('Error adding note:', error);
      }
  };
  
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}
      overlayClassName={styles.overlay}
    >
      <h2>Add Note</h2>
      <form onSubmit={handleAddNote}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={note.date}
            onChange={(e) => setNote({ ...note, date: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
           />
        </div>
        <button type="submit">Add Note</button>
        <button onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default AddNoteItem;