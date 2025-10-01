import { useState, useCallback, useContext } from 'react';
import TaskList from './components/TaskList.jsx';
import { TaskForm } from './components/TaskForm.jsx';

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

  return (
    <div>
      <TaskForm handleAdd={handleAdd} />
      <TaskList 
        todos={todos} 
        onComplete={handleComplete} 
        onDelete={handleDelete} 
      />
    </div>
  );
}
