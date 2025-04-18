import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserList = () => {
    const { users } = useContext(UserContext);

    return (
        <div>
            <h4>Список користувачів:</h4>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;