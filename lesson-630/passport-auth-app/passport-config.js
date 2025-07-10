const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const users = require('./users');

function initialize(passport) {
    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        const user = users.find(u => u.email === email);
        if (!user) return done(null, false, { message: 'No user with that email' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return done(null, false, { message: 'Incorrect password' });

        return done(null, user);
    }));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        const user = users.find(u => u.id === id);
        done(null, user);
    });
}

module.exports = initialize;