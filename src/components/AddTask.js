import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default AddTask;
