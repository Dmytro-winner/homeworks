const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB Error:', err));

// Routes
app.get('/create-user', async (req, res) => {
    try {
        const user = new User({ name: 'Іван', email: 'ivan@example.com' });
        await user.save();
        res.send('User created!');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});