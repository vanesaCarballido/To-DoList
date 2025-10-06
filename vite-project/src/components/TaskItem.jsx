import React, { useContext } from 'react';
import { DisplayModeContext } from '../contexts/context.jsx';

function TaskItem({ task, onComplete, onDelete }) {
  const displayModeSettings = useContext(DisplayModeContext);
  
  // Modo compacto: solo texto y botones
  if (displayModeSettings.displayMode === "compact") {
    return (
      <li className="taskItem taskItem--compact">
        <span className={task.completed ? "task-completed" : "task-pending"}>
          {task.text}
        </span>
        <span className="task-actions">
          <button onClick={() => onComplete(task.id)}>{task.completed ? '⟳' : '✓'}</button>
          <button onClick={() => onDelete(task.id)}>✕</button>
        </span>
      </li>
    );
  }
  
  // Modo detallado: texto, prioridad, estado y botones
  return (
    <li className="taskItem taskItem--detailed">
      <div className="task-content">
        <strong className={task.completed ? "task-completed" : "task-pending"}>
          {task.text}
        </strong>
        <div className="task-details">
          <span className={`priority priority--${task.priority}`}>
            Prioridad: {task.priority}
          </span>
          <span className="status">
            Estado: {task.completed ? "Completada" : "Pendiente"}
          </span>
        </div>
      </div>
      <span className="task-actions">
        <button onClick={() => onComplete(task.id)}>
          {task.completed ? '⟳ Desmarcar' : '✓ Completar'}
        </button>
        <button onClick={() => onDelete(task.id)}>🗑️ Borrar</button>
      </span>
    </li>
  );
}

export default React.memo(TaskItem);
