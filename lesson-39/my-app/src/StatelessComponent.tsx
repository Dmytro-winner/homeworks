import React from 'react';

interface StatelessComponentProps {
    count: number;
}

const StatelessComponent: React.FC<StatelessComponentProps> = ({ count }) => {
    return (
        <div>
            <h2>Stateless Component</h2>
            <p>Count: {count}</p>
        </div>
    );
};

export default StatelessComponent;