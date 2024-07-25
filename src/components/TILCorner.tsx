"use client";
import React, { useState } from 'react';

const TILCorner: React.FC = () => {
  const [tilEntries, setTilEntries] = useState<{ date: string, content: string }[]>([]);
  const [newEntry, setNewEntry] = useState('');

  const handleAddEntry = () => {
    if (newEntry.trim()) {
      const date = new Date().toLocaleDateString();
      setTilEntries([{ date, content: newEntry }, ...tilEntries]);
      setNewEntry('');
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-teal-50 via-teal-100 to-teal-200 shadow-xl w-full mx-auto">
      <h2 className="text-4xl font-extrabold mb-6 text-teal-900">Today I Learned</h2>
      
      {/* Add New Entry */}
      <div className="mb-6">
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Share your daily learnings..."
          className="p-4 rounded-lg w-full bg-white text-teal-900 placeholder-teal-500 resize-none shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          rows={4}
        />
        <button
          onClick={handleAddEntry}
          className="mt-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-teal-700 hover:to-teal-600 transition-transform transform hover:scale-105"
        >
          Add Entry
        </button>
      </div>

      {/* Display Entries */}
      <ul className="space-y-4">
        {tilEntries.map((entry, index) => (
          <li key={index} className="p-6 bg-white shadow-lg rounded-lg border border-teal-300 transition-transform transform hover:scale-105">
            <p className="text-sm text-teal-500 mb-2">{entry.date}</p>
            <p className="text-teal-800">{entry.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TILCorner;