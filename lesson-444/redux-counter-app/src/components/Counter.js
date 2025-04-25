import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

function Counter() {
    const count = useSelector(state => state.count); // доступ до стану
    const dispatch = useDispatch(); // можливість викликати дії

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