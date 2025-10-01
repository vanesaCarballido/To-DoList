import { useRef } from 'react';

function TaskForm({handleAdd}) {

    const taskInput = useRef('');

    function handeClick(event) {
        event.preventDefault(); 
        handleAdd(taskInput.current); 
        taskInput.current = ''; 
        taskInput.current.focus();
    }

    return (
        <div className="formulario">
            <form>
                <label>Ingrese la tarea:</label>
                <input ref={taskInput} type="text" required></input>
                <button onClick={handeClick} type="submit">Agregar</button>
            </form>
        </div>
    )
}

export { TaskForm };

