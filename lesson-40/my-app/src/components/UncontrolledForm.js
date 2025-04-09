import React, { useRef } from 'react';

const UncontrolledForm = () => {

    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Введене значення: ${inputRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Введіть текст:
                <input
                    type="text"
                    ref={inputRef}
                />
            </label>
            <button type="submit">Надіслати</button>
        </form>
    );
};

export default UncontrolledForm;