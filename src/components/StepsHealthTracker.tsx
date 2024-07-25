"use client";
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
    <div className="p-6 bg-teal-50 rounded-xl max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-teal-900">Steps/Health Tracker</h2>

      {/* Current Steps Display */}
      <div className="mb-6">
        <p className="text-xl text-teal-800 mb-2">
          Total Steps: <span className="font-bold text-teal-600">{steps}</span>
        </p>
      </div>

      {/* Add Steps Form */}
      <div className="flex items-center border border-teal-300 rounded-lg overflow-hidden bg-white">
        <input
          type="number"
          value={newSteps}
          onChange={(e) => setNewSteps(e.target.value)}
          placeholder="Enter steps"
          className="p-3 w-full border-none outline-none text-teal-900 placeholder-teal-500 bg-white"
        />
        <button
          onClick={handleAddSteps}
          className="bg-teal-600 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default StepsHealthTracker;