const express = require("express");
const router = express.Router();
const passport = require("../modules/passport");
const auth = require("./controllers/auth");
const usersController = require("./controllers/usersController");

//router.use(passport.initialize());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index', { title: 'Express' });
});

router.post('/auth', passport.authenticate(
    'local', {
        session: false
}), /*auth.serialize,*/ auth.generateToken, auth.respond);

router.all('/users', usersController.getUsers);

module.exports = router;
