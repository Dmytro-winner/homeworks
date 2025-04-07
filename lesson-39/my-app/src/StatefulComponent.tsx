import React, { useState } from 'react';

const StatefulComponent: React.FC = () => {

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Stateful Component</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default StatefulComponent;