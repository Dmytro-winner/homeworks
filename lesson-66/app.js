const express = require('express');
const { connectToDb } = require('./db/mongoClient');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

connectToDb().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});