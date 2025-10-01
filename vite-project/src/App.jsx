import { useState } from 'react';
import { createTodos } from './components/utils.jsx';
import TodoList from './components/TaskList.jsx';
import ButtonContext from './components/ButtonContext/ButtonContext.jsx';
import MySwitch from './components/Switch/switch.jsx';
import { ThemeContext } from './contexts/context.jsx';
import './App.css';


const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
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
    <>
      <ThemeContext.Provider value={themeSettings}>
      <div className={"App-" + themeSettings.mode}>
        <Button />
        <MySwitch />
      </div>
      </ThemeContext.Provider>

      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}

