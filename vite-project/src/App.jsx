import { useState, useCallback, useContext } from 'react';
import TaskList from './components/TaskList.jsx';
import ButtonContext from './components/ButtonContext/ButtonContext.jsx';
import MySwitch from './components/Switch/switch.jsx';
import { ThemeContext } from './contexts/context.jsx';
import './App.css';

import { TaskForm } from './components/TaskForm.jsx';

export default function App() {
  return (
      <AppContent />
  );
}

function AppContent() {
  const listaInicial = [
    { id: 1, text: "Estudiar React", priority: "high", completed: false },
    { id: 2, text: "Comprar comida", priority: "medium", completed: true },
    { id: 3, text: "Ir al gimnasio", priority: "low", completed: false },
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


  const [themeSettings, setThemeSettings] = useState({
    mode: "light",
    switchMode: () => {
      setThemeSettings((prevState) => ({
        ...prevState,
        mode: prevState.mode === "light" ? "dark" : "light",
      }));
    },
  });

  return (
    <div>
      <ThemeContext.Provider value={themeSettings}>
        <div className={"App-" + themeSettings.mode}>
          <ButtonContext />
          <MySwitch />
          <TaskForm handleAdd={handleAdd} />
          <TaskList 
            todos={todos} 
            onComplete={handleComplete} 
            onDelete={handleDelete} 
          />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}
