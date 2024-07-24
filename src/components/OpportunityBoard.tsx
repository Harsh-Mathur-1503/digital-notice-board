"use client";
import React, { useState } from 'react';

const initialOpportunities = [
  { id: 1, title: 'Opportunity 1', description: 'Description for Opportunity 1' },
  { id: 2, title: 'Opportunity 2', description: 'Description for Opportunity 2' },
  { id: 3, title: 'Opportunity 3', description: 'Description for Opportunity 3' },
];

const OpportunityBoard: React.FC = () => {
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddOpportunity = () => {
    if (newTitle.trim() && newDescription.trim()) {
      const newOpportunity = {
        id: Date.now(), // Generate a unique id
        title: newTitle,
        description: newDescription
      };
      setOpportunities(prev => [...prev, newOpportunity]);
      setNewTitle('');
      setNewDescription('');
    }
  };

  return (
    <div className="p-6 bg-gray-50 shadow-xl rounded-lg max-w-3xl mx-auto border border-gray-300">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Opportunity Board</h2>
      {/* Opportunity List */}
      <div className="space-y-4">
        {opportunities.map(({ id, title, description }) => (
          <div key={id} className="p-6 bg-white shadow-md rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-4 flex justify-end">
              <button className="text-blue-600 hover:underline">View Details</button>
            </div>
          </div>
        ))}
      </div>
      {/* Add Opportunity Form */}
      <div className="mb-8 bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add New Opportunity</h3>
        <div className="mb-4">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Opportunity Title"
            className="p-4 border border-gray-300 rounded-lg w-full mb-4 text-gray-800 placeholder-gray-500"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Opportunity Description"
            className="p-4 border border-gray-300 rounded-lg w-full mb-4 text-gray-800 placeholder-gray-500"
            rows={4}
          />
          <button
            onClick={handleAddOpportunity}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
          >
            Add Opportunity
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityBoard;