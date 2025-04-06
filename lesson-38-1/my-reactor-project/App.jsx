import React, { useState } from 'react';
import Button from 'Button';
import Input from 'Input';

const App = () => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        alert('Кнопка була натиснута!');
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Мій React Проєкт</h1>
            <Button text="Натисни мене" onClick={handleButtonClick} />
            <Input
                placeholder="Введіть текст..."
                onChange={handleInputChange}
            /> {/* Використовуємо компонент Input */}
            <p>Ви ввели: {inputValue}</p>
        </div>
    );
};

export default App

