import React from 'react';
import NoteEditorMenu from './NoteEditorMenu';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';

const NoteEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit, OrderedList, Paragraph],
        editorProps: {
            attributes: {
                class: "Editor",
            },
        },
        content: '<h2 class="mb-4 pb-2 border-b font-medium text-sky-900">Note Title What</h2><p>Maybe Some notes I take</p><p>I can display them here</p>',
    });

    return (
        <div className="w-full h-full overflow-hidden rounded border border-gray-300 bg-white">
            <div id="hs-editor-tiptap">
                <NoteEditorMenu editor={editor} />
                <EditorContent editor={editor} className="p-4 [&_*]:outline-none [&_.tiptap.ProseMirror]:min-h-[280px]" />
            </div>
        </div>
    );
};

export default NoteEditor;