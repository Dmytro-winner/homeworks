import React from 'react';
import LoginForm from './components/LoginForm';

function App() {
  return (
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
        <h2>Форма входу</h2>
        <LoginForm />
      </div>
  );
}

export default App;