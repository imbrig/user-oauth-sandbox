const router = require('express').Router();

const authCheck = (req, res, next) => {
  if(req.user) {
    // if logged in
    next();
  } else {
    // if user is not logged in
    res.redirect('/auth/login');
  }
};

router.get('/', authCheck, (req, res) => {
  res.render('profile', { user: req.user });
});

module.exports = router;