const express = require('express');
const { getDb } = require('../db/mongoClient');
const router = express.Router();

/// Створити користувача (опційно)
router.post('/', async (req, res) => {
    try {
        const db = getDb();
        const result = await db.collection('users').insertOne(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: 'Insert failed' });
    }
});

/// Курсор: перебір користувачів
router.get('/cursor', async (req, res) => {
    try {
        const db = getDb();
        const cursor = db.collection('users').find();
        const users = [];

        await cursor.forEach(doc => users.push(doc));

        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch with cursor' });
    }
});

/// Аггрегація: середній вік по країнах
router.get('/stats', async (req, res) => {
    try {
        const db = getDb();
        const stats = await db.collection('users').aggregate([
            {
                $group: {
                    _id: "$country",
                    averageAge: { $avg: "$age" },
                    total: { $sum: 1 }
                }
            }
        ]).toArray();

        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: 'Aggregation failed' });
    }
});

module.exports = router;