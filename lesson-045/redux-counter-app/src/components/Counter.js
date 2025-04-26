import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}

export default Counter;