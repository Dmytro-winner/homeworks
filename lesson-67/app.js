const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

app.get('/', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('test');
        const collections = await db.listCollections().toArray();
        res.send(`MongoDB connected! Found ${collections.length} collections.`);
    } catch (err) {
        res.status(500).send('MongoDB connection failed');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});