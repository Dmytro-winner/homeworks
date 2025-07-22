const Item = require('../models/Item');

// GET /api/items
const getItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ addedAt: -1 });
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /api/items
const addItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getItems,
    addItem
};