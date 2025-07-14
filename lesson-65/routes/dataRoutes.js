const express = require('express');
const router = express.Router();
const controller = require('../controllers/dataController');

// Створення
router.post('/one', controller.insertOne);
router.post('/many', controller.insertMany);

// Оновлення
router.patch('/update-one', controller.updateOne);
router.patch('/update-many', controller.updateMany);
router.put('/replace-one', controller.replaceOne);

// Видалення
router.delete('/delete-one', controller.deleteOne);
router.delete('/delete-many', controller.deleteMany);

// Читання
router.get('/find', controller.findWithProjection);

module.exports = router;