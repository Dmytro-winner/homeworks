import React, { useState } from 'react';
import StatefulComponent from './StatefulComponent';
import StatelessComponent from './StatelessComponent';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
      <div>
        <h1>React Components</h1>
        <StatefulComponent />
        <StatelessComponent count={count} />
        <button onClick={() => setCount(count + 1)}>Increment in App</button>
      </div>
  );
};

export default App;

