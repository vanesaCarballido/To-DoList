import { useState, useCallback} from 'react';
import TaskList from './components/TaskList.jsx';
import MySwitch from './components/Switch/switch.jsx';
import { DisplayModeContext } from './contexts/context.jsx';
import './App.css';

import TaskForm from './components/TaskForm.jsx';

export default function App() {
  return (
      <AppContent />
  );
}

function AppContent() {
  const listaInicial = [
    { id: 1, text: "Estudiar React", priority: "alta", completed: false },
    { id: 2, text: "Comprar comida", priority: "media", completed: true },
    { id: 3, text: "Ir al gimnasio", priority: "baja", completed: false },
  ];

  const [todos, setTodos] = useState(listaInicial);

  const handleAdd = useCallback((text, priority) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      priority,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }, [todos]);


  const handleComplete = useCallback((id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }, [todos]);


  const handleDelete = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);


  const [displayModeSettings, setDisplayModeSettings] = useState({
    mode: "light",
    displayMode: "detailed",
    switchMode: () => {
      setDisplayModeSettings((prevState) => ({
        ...prevState,
        mode: prevState.mode === "light" ? "dark" : "light",
      }));
    },
    toggleDisplayMode: () => {
      setDisplayModeSettings((prevState) => ({
        ...prevState,
        displayMode: prevState.displayMode === "detailed" ? "compact" : "detailed",
      }));
    },
  });

  return (
    <div>
      <DisplayModeContext.Provider value={displayModeSettings}>
        <div className={"App-" + displayModeSettings.mode}>
          <header>
            <h1>Lista de Tareas</h1>
            <div className="controls">
              <MySwitch />
              <button onClick={displayModeSettings.toggleDisplayMode}>
                Modo: {displayModeSettings.displayMode === "detailed" ? "Detallado" : "Compacto"}
              </button>
            </div>
          </header>
          <div className='after-header'>
            <TaskForm handleAdd={handleAdd} />
            <TaskList 
              todos={todos} 
              onComplete={handleComplete} 
              onDelete={handleDelete} 
            />
          </div>
        </div>
      </DisplayModeContext.Provider>
    </div>
  );
}
