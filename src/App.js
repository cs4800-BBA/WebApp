import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <div className="App">
        <h1>Task Management App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-task">Add Task</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </Route>
          <Route path="/add-task">
            <AddTask addTask={addTask} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
