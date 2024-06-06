import React, { useState } from 'react';
import './App.css'; 

export default function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Study", "Have lunch", "Go for a walk"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
        }
        setNewTask("");
    }
    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    return (
        <div className="container">
            <h1>To-Do-List</h1>
            <div className="input-container">
                <input type="text" placeholder='Enter a task..' value={newTask} onChange={handleInputChange}></input>
                <button onClick={addTask}>Add</button>
            </div>

            <ol className="task-list">
                {tasks.map((task, index) =>
                    <li key={index} className="task-item">
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>)}
            </ol>
        </div>
    );
}
