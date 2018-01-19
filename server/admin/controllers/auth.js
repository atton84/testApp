const jwt = require("jsonwebtoken");

const db = {
    updateOrCreate: function (user, cb) {
        cb(null, user);
    }
};

const auth = {

    serialize(req, res, next){
        db.updateOrCreate(req.user, function (err, user) {
            if (err) {
                return next(err);
            }
            // we store the updated information in req.user again
            req.user = {
                id: user.id
            };
            next();
        });
    },

    generateToken(req, res, next) {
        req.token = jwt.sign({
            id: req.user.id,
        }, "server secret", {
            expiresIn: 60*60*24
        });
        next();
    },

    respond(req, res) {
        res.status(200).json({
            user: req.user,
            token: req.token
        });
    },

    authenticate(req, res, next){
        req.user=jwt.verify(req.headers['authorization'],"server secret");
        next();
    }

}

module.exports = auth;