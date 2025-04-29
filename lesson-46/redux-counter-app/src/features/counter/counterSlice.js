import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount) => {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve(amount);
            }, 1000)
        );
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload;
        });
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;