
const passport = require('passport');
const Strategy = require('passport-local');

passport.use(new Strategy(
    (username, password, done) => {
        // database dummy - find user and verify password
        if(username === 'atton84' && password === '123'){
            done(null, {
                id: 84,
                firstname: 'atton84',
                lastname: 'name',
                email: 'atton84@gmail.com',
                verified: true
            });
        }
        else {
            done(null, false);
        }
    }
));

module.exports = passport;
