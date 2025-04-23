import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: 1, name: 'Дмитрик' },
        { id: 2, name: 'Світлана' },
        { id: 3, name: 'Миколка' }
    ]
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // додаткові дії тут, якщо треба
    }
});

export const selectUsers = state => state.users.users;

export default userSlice.reducer;