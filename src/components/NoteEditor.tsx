import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteEditorMenu from './NoteEditorMenu';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import { RootState } from '../store/rootReducer';
import { updateNote } from '../store/noteItemSlice';


const NoteEditor = () => {
    const dispatch = useDispatch();
    const activeNote = useSelector((state: RootState) => state.noteItem.items.find(note => note._id === state.noteItem.activeNoteId));
    const editor = useEditor({
        extensions: [StarterKit, OrderedList, Paragraph],
        editorProps: {
            attributes: {
                class: "Editor",
            },
        },
        content: activeNote ? activeNote.content : '',   
     });
    
    useEffect(() => {
        if (editor && activeNote) {
            editor.commands.setContent(`${activeNote.content}`);
        }
    }, [editor, activeNote]);

    const handleSave = () => {
        if (editor && activeNote) {
            const content = editor.getHTML();
            const updatedNote = { ...activeNote, content };
            dispatch(updateNote(updatedNote));
        }
    };

    return (
        <div className="w-full h-full overflow-hidden rounded border border-gray-300 bg-white">
            <div id="hs-editor-tiptap">
                <NoteEditorMenu editor={editor} />
                <div className="p-4 mb-4 border-b flex justify-between items-center">
                    <h2 className="font-medium text-sky-900">{activeNote?.title}</h2>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 border rounded border-blue-500 text-blue-500 hover:text-blue-600"
                    >
                        Save
                    </button>
               </div>
                <EditorContent editor={editor} className="p-4 [&_*]:outline-none" />
               
            </div>
        </div>
    );
};

export default NoteEditor;