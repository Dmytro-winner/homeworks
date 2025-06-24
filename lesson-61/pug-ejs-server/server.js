const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const users = [
    { id: 1, name: 'Лейла', age: 35 },
    { id: 2, name: 'Дмитро', age: 42 },
];

const articles = [
    { id: 1, title: 'Як швидко заробити на BMW M5 F90  максимальній комплектації', content: 'Ніяк)))))' },
    { id: 2, title: 'Як заробити на BMW M5 F90  максимальній комплектації', content: 'роби те, що подобається' },
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('ejs', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`
    <h1>Головна сторінка</h1>
    <ul>
      <li><a href="/users">Список користувачів (PUG)</a></li>
      <li><a href="/articles">Список статей (EJS)</a></li>
    </ul>
  `);
});

app.get('/users', (req, res) => {
    res.render('users/index.pug', { users });
});

app.get('/users/:userId', (req, res) => {
    const user = users.find(u => u.id == req.params.userId);
    if (user) {
        res.render('users/details.pug', { user });
    } else {
        res.status(404).send('Користувача не знайдено');
    }
});

app.get('/articles', (req, res) => {
    res.render('articles/index.ejs', { articles });
});

app.get('/articles/:articleId', (req, res) => {
    const article = articles.find(a => a.id == req.params.articleId);
    if (article) {
        res.render('articles/details.ejs', { article });
    } else {
        res.status(404).send('Статтю не знайдено');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущено: http://localhost:${PORT}`);
});