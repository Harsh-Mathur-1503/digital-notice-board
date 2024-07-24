"use client"
import React, { useState } from 'react';

const StepsHealthTracker: React.FC = () => {
  const [steps, setSteps] = useState<number>(0);
  const [newSteps, setNewSteps] = useState<string>('');

  const handleAddSteps = () => {
    const stepValue = Number(newSteps); // Convert newSteps to a number

    if (!isNaN(stepValue) && stepValue > 0) {
      setSteps(steps + stepValue);
      setNewSteps(''); // Clear the input field
    } else {
      // Optionally handle invalid input
      console.error('Please enter a valid number greater than 0');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto border border-gray-300">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Steps/Health Tracker</h2>

      {/* Current Steps Display */}
      <div className="mb-4">
        <p className="text-xl text-gray-700 mb-2">Total Steps: <span className="font-bold text-blue-600">{steps}</span></p>
      </div>

      {/* Add Steps Form */}
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="number"
          value={newSteps}
          onChange={(e) => setNewSteps(e.target.value)}
          placeholder="Enter steps"
          className="p-3 w-full border-none outline-none bg-gray-100 text-gray-900 placeholder-gray-500"
        />
        <button
          onClick={handleAddSteps}
          className="bg-blue-600 text-white px-6 py-3 border-none cursor-pointer hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default StepsHealthTracker;