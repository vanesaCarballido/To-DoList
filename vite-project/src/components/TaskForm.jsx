import { useRef, useState } from 'react';

function TaskForm({ handleAdd }) {
  const taskName = useRef(null);
  const [priority, setPriority] = useState('baja');

  function handleClick(event) {
    event.preventDefault(); 
    handleAdd(taskName.current.value, priority); 
    taskName.current.value = ''; 
    taskName.current.focus();
    setPriority('baja'); 
  }

  return (
    <div className="formulario">
      <form>
        <label>Ingrese la tarea:</label>
        <input ref={taskName} type="text" required />

        <label>Elija la prioridad:</label>
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="baja">Baja</option>
          <option value="alta">Alta</option>
        </select>

        <button onClick={handleClick} type="submit">Agregar</button>
      </form>
    </div>
  );
}

export { TaskForm };
