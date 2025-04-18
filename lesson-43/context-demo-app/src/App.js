import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import Dashboard from './components/Dashboard';
import { ThemeContext } from './context/ThemeContext';

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`App ${theme}`}>
            <h1>Контекст у React</h1>
            <button onClick={toggleTheme}>
                Змінити тему на {theme === 'light' ? 'темну' : 'світлу'}
            </button>
            <Dashboard />
        </div>
    );
}

export default App;





