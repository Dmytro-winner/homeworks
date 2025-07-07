const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = 'super_secret_key';

const users = [];

router.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (users.find(u => u.username === username)) {
        return res.status(409).send('Користувач вже існує');
    }

    users.push({ username, password });
    res.send('Користувача створено');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const found = users.find(u => u.username === username && u.password === password);

    if (!found) return res.status(401).send('Невірні дані');

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.send('Успішно увійшли');
});

function authenticate(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(401).send('Токен відсутній');

    try {
        const user = jwt.verify(token, JWT_SECRET);
        req.user = user;
        next();
    } catch {
        res.status(403).send('Невірний токен');
    }
}

router.get('/profile', authenticate, (req, res) => {
    res.send(`Привіт, ${req.user.username}!`);
});

module.exports = router;