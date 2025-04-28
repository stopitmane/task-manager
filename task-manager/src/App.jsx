import { useState } from "react";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() === "") return; // Prevent empty task
    setTasks([...tasks, taskInput]);
    setTaskInput(""); // Clear input
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Task Manager</h1>

      <div className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="border border-gray-300 rounded p-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Add Task
        </button>
      </div>

      <ul className="w-full max-w-md space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-600 text-center">No tasks yet. Add one!</p>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className="bg-white flex justify-between items-center p-3 rounded shadow"
            >
              <span>{task}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                ✖
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
