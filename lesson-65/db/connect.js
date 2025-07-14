const { MongoClient } = require('mongodb');

let db;

const connectDB = async () => {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db(); // автоматично вибирає базу з URI
    console.log('Підключено до MongoDB Atlas');
};

const getDB = () => db;

module.exports = { connectDB, getDB };