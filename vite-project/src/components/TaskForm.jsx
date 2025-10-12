import { useRef, useState, useEffect } from 'react';

function TaskForm({ handleAdd }) {
  const taskName = useRef(null);
  const [priority, setPriority] = useState('baja');

  useEffect(() => {
    taskName.current.focus();
  }, []);

  function handleClick(event) {
    event.preventDefault();
    const value = taskName.current.value.trim(); 

    if (value === '') {
      alert('Por favor, ingrese una tarea');
      return; 
    }

    handleAdd(value, priority);
    taskName.current.value = '';
    setPriority('baja');
    taskName.current.focus();
  }


  return (
    <div className="taskForm">
      <form>
        <label>Ingrese la tarea:</label>
        <input ref={taskName} type="text"/>
        <label>Prioridad:</label>
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
        <button onClick={handleClick} type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default TaskForm;
