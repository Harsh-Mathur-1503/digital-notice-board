"use client";
import React, { useState } from 'react';

const DailyGrowthChecklist: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([
    'Read a book chapter',
    'Exercise for 30 minutes',
    'Complete a coding challenge',
    'Meditate for 10 minutes'
  ]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleCheckboxChange = (task: string) => {
    setCompletedTasks(prev =>
      prev.includes(task) ? prev.filter(t => t !== task) : [...prev, task]
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() && !tasks.includes(newTask)) {
      setTasks(prev => [...prev, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="p-6 bg-teal-50 rounded-2xl max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-teal-900">Daily Growth Checklist</h2>

      {/* Task List */}
      <ul className="space-y-4">
        {tasks.map(task => (
          <li
            key={task}
            className="flex items-center p-4 bg-teal-50 text-teal-900 rounded-lg border border-teal-50 transition-transform hover:scale-105 hover:bg-teal-200"
          >
            <input
              type="checkbox"
              checked={completedTasks.includes(task)}
              onChange={() => handleCheckboxChange(task)}
              className="mr-4 h-5 w-5 accent-teal-500"
            />
            <span
              className={`flex-1 text-lg ${completedTasks.includes(task) ? 'line-through text-gray-500' : 'text-teal-900'}`}
            >
              {task}
            </span>
          </li>
        ))}
      </ul>
      
      {/* Add Task Form */}
      <div className="mt-6">
        <div className="flex items-center border border-teal-300 rounded-lg overflow-hidden bg-white shadow-md">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="p-3 w-full border-none outline-none text-teal-900 placeholder-teal-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-teal-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyGrowthChecklist;