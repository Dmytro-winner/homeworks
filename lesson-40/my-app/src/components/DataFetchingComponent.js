import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Мережевий запит не вдався');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError('Сталася помилка при завантаженні даних');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Завантаження...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Список постів</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetchingComponent;