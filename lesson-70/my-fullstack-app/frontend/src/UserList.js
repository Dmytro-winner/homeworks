import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/api/users")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Users:</h1>
            <ul>
                {users.map(u => (
                    <li key={u._id}>{u.name} ({u.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;