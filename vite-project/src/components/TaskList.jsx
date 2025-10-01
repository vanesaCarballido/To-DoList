import { useState, useMemo } from "react";


function Task({ task }) {
  return (
    <li>
      {task.text} ({task.priority}) 
    </li>
  );
}

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudiar React", priority: "high", completed: false },
    { id: 2, text: "Comprar comida", priority: "low", completed: true },
    { id: 3, text: "Ir al gimnasio", priority: "medium", completed: false }
  ]);

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("low");

  const highPriorityTasks = useMemo(() => {
    return tasks.filter(task => task.priority === "high");
  }, [tasks]);

  const pendingCount = useMemo(() => {
    return tasks.filter(task => !task.completed).length;
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: newTask, priority, completed: false }
    ]);
    setNewTask("");
    setPriority("low");
  };

  
  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Tareas</h2>
      <p>Tareas pendientes: {pendingCount}</p>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
        <button onClick={addTask}>Agregar</button>
      </div>

      <h3>Tareas de Alta Prioridad</h3>
      <ul>
        {highPriorityTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;