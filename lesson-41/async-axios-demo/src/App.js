import React, { useState } from 'react';
import './App.css';
import UserData from './UserData';

function App() {
  const [userId, setUserId] = useState(1);   // Стан для userId

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  return (
      <div className="App">
        <h1>Асинхронний запит з Axios</h1>
        <label>
          Введіть ID користувача (1-10):{" "}
          <input type="number" min="1" max="10" value={userId} onChange={handleChange} />
        </label>
        <UserData userId={userId} />
      </div>
  );
}

export default App;


