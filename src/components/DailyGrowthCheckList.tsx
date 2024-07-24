"use client"
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
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto border border-gray-300">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Daily Growth Checklist</h2>

      {/* Task List */}
      <ul className="space-y-3">
        {tasks.map(task => (
          <li key={task} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
            <input
              type="checkbox"
              checked={completedTasks.includes(task)}
              onChange={() => handleCheckboxChange(task)}
              className="mr-3"
            />
            <span className={`flex-1 ${completedTasks.includes(task) ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {task}
            </span>
          </li>
        ))}
      </ul>
      
      {/* Add Task Form */}
      <div className="mt-6">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="p-3 w-full border-none outline-none bg-gray-100 text-gray-900 placeholder-gray-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-6 py-3 border-none cursor-pointer hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyGrowthChecklist;