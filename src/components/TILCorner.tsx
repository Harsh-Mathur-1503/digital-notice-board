"use client"
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
    <div className="p-6 bg-gradient-to-br from-blue-100 to-indigo-200 shadow-md rounded-lg max-w-md mx-auto border border-gray-300">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Today I Learned</h2>
      
      {/* Add New Entry */}
      <div className="mb-4">
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Write down something you learned today..."
          className="p-4 border border-gray-300 rounded-lg w-full bg-white text-gray-900 placeholder-gray-500 resize-none"
          rows={4}
        />
        <button
          onClick={handleAddEntry}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Entry
        </button>
      </div>

      {/* Display Entries */}
      <ul className="space-y-4">
        {tilEntries.map((entry, index) => (
          <li key={index} className="p-4 bg-white shadow-sm rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">{entry.date}</p>
            <p className="text-gray-800">{entry.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TILCorner;