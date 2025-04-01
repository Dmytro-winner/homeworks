import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';


import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }


    const handleButtonClick = () => {
        alert(`Ви ввели: ${inputValue}`);
    }

    return (
        <div>
            <h1>Привіт, React!</h1>
            <Input
                placeholder="Введіть текст"
                onChange={handleInputChange}
            />
            <Button
                text="Показати введене"
                onClick={handleButtonClick}
            />
        </div>
    );
}

export default App;