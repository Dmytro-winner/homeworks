import React from 'react';

export default function TailwindCard() {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <img className="w-full" src="https://cdn.bmwusa.com/img/BMW_X5.png" alt="BMW X5" />
            <div className="p-4">
                <h1 className="text-xl font-bold">BMW X5</h1>
                <p className="text-gray-600">Потужний кросовер для сімейних поїздок.</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Купити</button>
            </div>
        </div>
    );
}