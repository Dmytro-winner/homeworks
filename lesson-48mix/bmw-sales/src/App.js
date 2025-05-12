import React from 'react'; // імпорт React
import './App.css'; // імпортуємо базовий CSS (якщо він потрібен)// Bootstrap CSS
import { Button } from 'react-bootstrap'; // Якщо використовуєш компоненти Bootstrap
import  MuiCarCard  from './MuiCarCard'; // Ваш власний компонент
import 'antd/dist/reset.css'; // Ant Design CSS
import { Card } from 'antd'; // Якщо використовуєш компоненти з Ant Design
import  TailwindButton  from './TailwindButton'; // Якщо використовуєш TailwindCSS
//import 'antd/dist/antd.css';

function App() {
    return (
        <div className="App">
            <h1>BMW Sales</h1>

            {/* Компоненти з використанням Bootstrap */}
            <Button variant="primary">Hello Bootstrap</Button>

            {/* Компонент з використанням MUI */}
            <MuiCarCard />

            {/* Компонент з використанням Ant Design */}
            <Card title="BMW X5" style={{ width: 300 }}>
                <p>Car details here...</p>
            </Card>

            {/* Компонент з використанням Tailwind CSS */}
            <TailwindButton />

        </div>
    );
}

export default App;

