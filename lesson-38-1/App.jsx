import React, { useState } from 'react';
import Button from './Button'; // Імпортуємо компонент Button
import Input from './Input';   // Імпортуємо компонент Input

const App = () => {
    const [inputValue, setInputValue] = useState(''); // Стан для введеного тексту

    const handleButtonClick = () => {
        alert('Кнопка була натиснута!');
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Оновлюємо введене значення
    };

    return (
        <div>
            <h1>Мій React Проєкт</h1>
            <Button text="Натисни мене" onClick={handleButtonClick} /> {/* Використовуємо компонент Button */}
            <Input
                placeholder="Введіть текст..."
                onChange={handleInputChange}
            /> {/* Використовуємо компонент Input */}
            <p>Ви ввели: {inputValue}</p>
        </div>
    );
};

export default App;