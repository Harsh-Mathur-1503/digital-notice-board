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
    <div className="p-6 bg-gradient-to-r from-teal-100 to-teal-50 shadow-xl rounded-xl max-w-md mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-teal-900">Google Keep</h2>

      {/* New Note Form */}
      <div className="mb-6">
        <input
          type="text"
          value={newNote.title}
          onChange={(e) => handleChange(e, 'title')}
          placeholder="Note Title"
          className="p-4 border border-teal-300 rounded-lg w-full mb-4 text-teal-900 placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <textarea
          value={newNote.content}
          onChange={(e) => handleChange(e, 'content')}
          placeholder="Note Content"
          className="p-4 border border-teal-300 rounded-lg w-full mb-4 text-teal-900 placeholder-teal-500 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          rows={4}
        />
        <button
          onClick={handleAddNote}
          className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-teal-600 hover:to-teal-700 transition-colors transform hover:scale-105"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.map(note => (
          <div key={note.id} className="p-4 bg-white shadow-lg rounded-lg border border-teal-200 relative transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2 text-teal-800">{note.title}</h3>
            <p className="text-teal-700">{note.content}</p>
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