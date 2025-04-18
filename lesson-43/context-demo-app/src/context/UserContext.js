import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users] = useState([
        { id: 1, name: 'Дмитрик' },
        { id: 2, name: 'Світлана' },
        { id: 3, name: 'Миколка' }
    ]);

    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    );
};