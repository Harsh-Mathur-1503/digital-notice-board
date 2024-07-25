"use client"
import React, { useState } from 'react';

const ScribbleNotes: React.FC = () => {
  const [notes, setNotes] = useState<string>('');
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const handleSaveNote = () => {
    if (notes.trim()) {
      setSavedNotes([...savedNotes, notes]);
      setNotes('');
    }
  };

  return (
    <div className="p-4 bg-teal-50 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-teal-700">Scribble Notes</h2>
      <textarea
        className="w-full h-32 p-2 border border-teal-300 text-teal-900 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes here..."
      ></textarea>
      <button
        onClick={handleSaveNote}
        className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        Save Note
      </button>
      <div className="mt-4 space-y-2">
        {savedNotes.map((note, index) => (
          <div
            key={index}
            className="p-2 border text-teal-900 border-teal-300 rounded-md bg-teal-50"
          >
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScribbleNotes;