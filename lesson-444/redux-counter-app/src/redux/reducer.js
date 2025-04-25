import { INCREMENT, DECREMENT } from './actions';

// Початковий стан
const initialState = {
    count: 0,
};

// Редюсер
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
};