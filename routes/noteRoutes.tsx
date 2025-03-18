import express from 'express';
import Note from '../model/NoteItem';

const router = express.Router();
// Get all notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new note
router.post('/notes', async (req, res) => {
  const note = new Note({
    title: req.body.title,
    date: req.body.date,
    content: req.body.content,
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
});

// Update a note
router.put('/notes/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    note.title = req.body.title;
    note.date = req.body.date;
    note.content = req.body.content;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a note
router.delete('/notes/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    await note.deleteOne({ _id: req.params.id });
    res.json({ message: 'Note deleted' });
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;