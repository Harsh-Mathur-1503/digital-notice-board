"use client";
import React, { useState } from 'react';

interface Note {
  id: number;
  title: string;
  content: string;
}

const initialNotes: Note[] = [
  { id: 1, title: 'Meeting Notes', content: 'Discuss project roadmap and deadlines.' },
  { id: 2, title: 'Grocery List', content: 'Milk, Eggs, Bread, Apples' },
];

const GoogleKeep: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [newNote, setNewNote] = useState<Note>({ id: Date.now(), title: '', content: '' });

  const handleAddNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      setNotes(prev => [...prev, { ...newNote, id: Date.now() }]);
      setNewNote({ id: Date.now(), title: '', content: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: 'title' | 'content') => {
    setNewNote(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleDeleteNote = (id: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto border border-gray-300">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Google Keep</h2>

      {/* New Note Form */}
      <div className="mb-6">
        <input
          type="text"
          value={newNote.title}
          onChange={(e) => handleChange(e, 'title')}
          placeholder="Title"
          className="p-2 border border-gray-300 rounded-lg w-full mb-2"
        />
        <textarea
          value={newNote.content}
          onChange={(e) => handleChange(e, 'content')}
          placeholder="Content"
          className="p-2 border border-gray-300 rounded-lg w-full mb-2"
          rows={4}
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.map(note => (
          <div key={note.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{note.title}</h3>
            <p className="text-gray-700">{note.content}</p>
            <button
              onClick={() => handleDeleteNote(note.id)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition-colors"
              title="Delete Note"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleKeep;