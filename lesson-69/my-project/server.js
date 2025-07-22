const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
connectDB(); // підключення до MongoDB через Mongoose

app.use(express.json());

// Роутинг
const myRoutes = require('./routes/myRoutes');
app.use('/api/items', myRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));