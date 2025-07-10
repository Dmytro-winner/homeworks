const express = require('express');
const session = require('express-session');
const passport = require('passport');
const flash = require('express-flash');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const initializePassport = require('./passport-config');
const users = require('./users');

const app = express();
const PORT = 3000;

initializePassport(passport);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false // Увімкни true, якщо HTTPS
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.redirect('/login'));

app.get('/login', (req, res) => res.render('login'));
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/protected',
        failureRedirect: '/login',
        failureFlash: true
    })
);

app.get('/register', (req, res) => res.render('register'));
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        req.flash('error', 'Email already registered');
        return res.redirect('/register');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ id: Date.now().toString(), email, password: hashedPassword });
    res.redirect('/login');
});

app.get('/protected', checkAuthenticated, (req, res) => {
    res.render('protected', { email: req.user.email });
});

app.post('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/login');
    });
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));