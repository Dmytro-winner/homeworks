const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Це диво, але Сервер працює!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));