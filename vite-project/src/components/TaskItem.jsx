import React, { useContext } from 'react';

function TaskItem({ task, onComplete, onDelete }) {
  
  return (
    <li className="taskItem">
      <strong>{task.text}</strong> (prioridad: {task.priority})
      <span>
        <button onClick={() => onComplete(task.id)}>{task.completed ? '⟳' : '✓'}</button>
        <button onClick={() => onDelete(task.id)}>Borrar</button>
      </span>
    </li>
  );
}

export default React.memo(TaskItem);
