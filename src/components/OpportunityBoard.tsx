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
    <div className="p-6 bg-teal-50 rounded-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-teal-900">Opportunity Board</h2>
      {/* Opportunity List */}
      <div className="space-y-4">
        {opportunities.map(({ id, title, description }) => (
          <div key={id} className="p-6 bg-white rounded-lg 0 hover:bg-teal-100 transition-colors">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">{title}</h3>
            <p className="text-teal-700">{description}</p>
            <div className="mt-4 flex justify-end">
              <button className="text-teal-600 hover:underline font-semibold">View Details</button>
            </div>
          </div>
        ))}
      </div>
      {/* Add Opportunity Form */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6 border border-teal-900">
        <h3 className="text-xl font-semibold text-teal-800 mb-4">Add New Opportunity</h3>
        <div className="mb-4">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Opportunity Title"
            className="p-4 border border-teal-800 rounded-lg w-full mb-4 text-teal-900 placeholder-teal-500"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Opportunity Description"
            className="p-4 border border-teal-800 rounded-lg w-full mb-4 text-teal-900 placeholder-teal-500"
            rows={4}
          />
          <button
            onClick={handleAddOpportunity}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-all font-semibold"
          >
            Add Opportunity
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityBoard;