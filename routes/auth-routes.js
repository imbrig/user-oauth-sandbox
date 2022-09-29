const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  req.logout();
  res.redirect('/');
});

// auth with cognito
router.get('/cognito', passport.authenticate('cognito-oauth2', {
  scope: ['openid']
}));

// callback route for cognito to redirect to
router.get('/callback', passport.authenticate('cognito-oauth2'), (req, res) => {
  res.redirect('/profile');
});

module.exports = router;
