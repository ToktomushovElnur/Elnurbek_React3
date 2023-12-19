import React, { useState } from 'react';
import './index.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
      <div className="App">
        <h1>Todo App</h1>
        <div>
          <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Введите новую задачу"
          />
          <button onClick={handleAddTask}>Добавить</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
              <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
  );
}

export default App;
