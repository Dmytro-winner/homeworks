require('dotenv').config();
const express = require('express');
const app = express();
const { connectDB } = require('./db/connect');
const dataRoutes = require('./routes/dataRoutes');

app.use(express.json());
app.use('/api/data', dataRoutes);

const PORT = process.env.PORT || 5000;

const start = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Сервер працює на порту ${PORT}`);
    });
};

start();