"use client";
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
    <div className="p-6 bg-teal-50 rounded-xl max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-300 pb-2">Poll</h2>
      <ul className="space-y-4">
        {pollOptions.map(({ id, option, votes }) => (
          <li key={id} className="flex items-center justify-between p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
            <span className="text-lg font-medium text-teal-800">{option}</span>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleVote(id)}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
              >
                Vote
              </button>
              <span className="text-sm text-teal-600">{votes} votes</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;