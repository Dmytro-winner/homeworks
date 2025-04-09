import React from 'react';
import './App.css';
import UncontrolledForm from './components/UncontrolledForm';
import DataFetchingComponent from './components/DataFetchingComponent';
import logo from './logo.svg';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Неконтрольований компонент</h1>
                <UncontrolledForm />

                <h1>Запит до сервера</h1>
                <DataFetchingComponent /> 

                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;