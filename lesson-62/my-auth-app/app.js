const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('ejs', require('ejs').__express);

app.get('/', (req, res) => {
    const theme = req.cookies.theme || 'light';
    res.render('pug/index', { theme });
});

app.get('/ejs', (req, res) => {
    const theme = req.cookies.theme || 'light';
    res.render('ejs/index.ejs', { theme });
});

app.post('/set-theme', (req, res) => {
    const { theme } = req.body;
    res.cookie('theme', theme, { maxAge: 24 * 3600 * 1000 });
    res.redirect('back');
});

app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущено: http://localhost:${PORT}`);
});
