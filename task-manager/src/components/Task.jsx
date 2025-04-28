function Task({ task, toggleComplete, deleteTask }) {
    return (
      <div className="flex justify-between items-center border-b py-2">
        <div 
          onClick={() => toggleComplete(task.id)}
          className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.text}
        </div>
        <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    );
  }
  
  export default Task;
  