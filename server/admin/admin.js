const express = require("express");
const router = express.Router();
const passport = require("../modules/passport");
const auth = require("./controllers/auth");

//router.use(passport.initialize());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index', { title: 'Express' });
});

router.post('/auth', passport.authenticate(
    'local', {
        session: false
}), auth.serialize, auth.generateToken, auth.respond);


//router.get('/sync', auth.authenticate, auth.respond);

module.exports = router;
