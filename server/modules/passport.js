
const passport = require('passport');
const Strategy = require('passport-local');
const User = require("../admin/models/User");

passport.use(new Strategy(
    (username, password, done) => {
        // database dummy - find user and verify password
        User.model.findOne({username:username,password:password},(err,res)=> {
            if(err)
                done(null, false);

            console.log(res);
            done(null, res);
        });
    }
));

module.exports = passport;
