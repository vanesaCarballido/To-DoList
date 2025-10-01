import React, { useMemo } from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ todos, onComplete, onDelete }) {
  const highPriorityTasks = useMemo(() => 
    todos.filter(task => task.priority === 'high'), 
    [todos]
  );

  const pendingCount = useMemo(() => 
    todos.filter(task => !task.completed).length, 
    [todos]
  );

  return (
    <div >
      <h2>Lista de Tareas</h2>
      <p>Tareas pendientes: {pendingCount}</p>

      <h3>Tareas:</h3>
      <ul>
        {highPriorityTasks.map(task => (
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
