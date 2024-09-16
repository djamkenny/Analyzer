import React,{ useState } from "react";
import './todo.css'

function TodoApp() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }
    }
    
    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }


    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    return (
        <div className="sidebar-div-container">
            <div className="to-do-list" >
                <h3>My Todo</h3>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="intext" >{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}>
                                X
                            </button>
                        </li>
                        
                )}
                </ol>

                <div>
                    <input type="text" 
                            onChange={handleInputChange} 
                            value={newTask} 
                            placeholder="Enter task"/>
                    <button className="add-button" onClick={addTask}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default TodoApp