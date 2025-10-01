import React, { useMemo, useState } from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ todos, onComplete, onDelete }) {
  const [showHigh, setShowHigh] = useState(false);

  const highPriorityTasks = useMemo(() => 
    todos.filter(task => task.priority === 'alta'), 
    [todos]
  );

  const pendingCount = useMemo(() => 
    todos.filter(task => !task.completed).length, 
    [todos]
  );

  const handleShowHigh = () => {
    setShowHigh(!showHigh); 
  };

  const tasksToShow = showHigh ? highPriorityTasks : todos;

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <p>Tareas pendientes: {pendingCount}</p>

      <button onClick={handleShowHigh}>
        {showHigh ? "Todos" : "Prioridad alta"}
      </button>

      <h3>Tareas:</h3>
      <ul>
        {tasksToShow.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onComplete={onComplete} 
            onDelete={onDelete} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
