import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementAsync } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Redux Toolkit Counter with Async</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementAsync(5))}>Add 5 after 3s</button>
      </div>
  );
}

export default App;