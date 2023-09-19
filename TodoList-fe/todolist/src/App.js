import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    //Fetching tasks from backend
    try {
      const response = await axios.get('http://localhost:3001/alltasks');
      setTasksList(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = async () => {
    if (task.trim() === '') return;

    try {
      // Send a POST request to add a new task
      await axios.post('http://localhost:3001/task', { task });
      setTask('');
      fetchTasks(); // Fetch tasks after adding a new one
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (taskToDelete) => {
    try {
      // Send a DELETE request to delete a task by description
      await axios.delete('http://localhost:3001/deletetask', {
        data: { task: taskToDelete },
      });
      fetchTasks(); // Fetch tasks after deleting one
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={handleTaskChange}
      />
      <button className='addtask' onClick={addTask}>Add Task</button>
      <div>
        <h2>Tasks:</h2>
        <ul>
          {tasksList.map((taskItem) => (
            <li>
              {taskItem}
              <button className='deleteb' onClick={() => deleteTask(taskItem)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
