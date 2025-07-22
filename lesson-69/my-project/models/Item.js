const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Назва обов’язкова'],
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', ItemSchema);