"use client"
import React, { useState } from 'react';

const initialPollOptions = [
  { id: 1, option: 'Option 1', votes: 0 },
  { id: 2, option: 'Option 2', votes: 0 },
  { id: 3, option: 'Option 3', votes: 0 },
];

const Poll: React.FC = () => {
  const [pollOptions, setPollOptions] = useState(initialPollOptions);

  const handleVote = (id: number) => {
    setPollOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    );
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto border border-gray-200">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 border-b border-gray-300 pb-2">Poll</h2>
      <ul className="space-y-4">
        {pollOptions.map(({ id, option, votes }) => (
          <li key={id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
            <span className="text-lg font-medium text-gray-800">{option}</span>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleVote(id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Vote
              </button>
              <span className="text-sm text-gray-600">{votes} votes</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;