import { useRef, useState, useEffect } from 'react';

function TaskForm({ handleAdd }) {
  const taskName = useRef(null);
  const [priority, setPriority] = useState('low');

  useEffect(() => {
    taskName.current.focus();
  }, []);

  function handleClick(event) {
    event.preventDefault();
    handleAdd(taskName.current.value, priority);
    taskName.current.value = '';
    setPriority('low');
    taskName.current.focus();
  }

  return (
    <div className="taskForm">
      <form>
        <label>Ingrese la tarea:</label>
        <input ref={taskName} type="text"/>
        <label>Prioridad:</label>
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
        <button onClick={handleClick} type="submit">Agregar</button>
      </form>
    </div>
  );
}

export { TaskForm };
