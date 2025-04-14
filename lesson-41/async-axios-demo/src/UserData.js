import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = ({ userId }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
                setUserData(response.data);
            } catch (err) {
                setError('Помилка при завантаженні даних');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    if (loading) {
        return <p>Завантаження даних...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <div>
            <h2>Інформація про користувача</h2>
            <p><strong>Ім'я:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Телефон:</strong> {userData.phone}</p>
        </div>
    );
};

export default UserData;