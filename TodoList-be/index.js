const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
const PORT = 3001;
const config = require('./config');

app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool(config.db); //Creating connection with database

//Adding a new task
app.post('/task', async (req, res) => {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ error: 'Task is required' });
    }
  
    try {
      await pool.query('INSERT INTO tasks (task) VALUES (?)', [task]);
      res.status(201).json({result : 'Task added successfully'});
    } catch (error) {
      console.error('Error adding task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//Getting all the tasks

app.get('/alltasks', async(req, res) => {
    try{
      const [rows] = await pool.query('SELECT * FROM tasks');
      const tasks = rows.map((row) => row.task);
      res.json(tasks);
    }
    catch (error) { 
        console.error('Error fetching tasks:', error);
        res.status(500).json({error : 'Internal server error'})
    }
});


//Deleting a task
app.delete('/deletetask', async (req, res) => {
    const {task} = req.body;

    try{
       await pool.query('DELETE FROM tasks where task = ?', [task]);
       res.status(201).json({result : "Task deleted successfully"});
    }
    catch(error){
       console.error('Error while deleting task:', error)
       res.status(500).json({error : "Internal Server error"})
    }
});


app.listen(PORT, () => {
    console.log(`Server has started in the port: ${PORT}`)
})

