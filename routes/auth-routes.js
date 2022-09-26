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

// auth with google
// router.get('/google', passport.authenticate('google', {
//   scope:['profile', 'email']
// }));

// callback route for google to redirect to
// router.get('/callback', passport.authenticate('google'), (req, res) => {
//   res.redirect('/profile');
// });

// auth with cognito
// router.get('/cognito', passport.authenticate('cognito-oauth2', {
//   scope: ['openid', 'profile', 'email']
// }));

// callback route for cognito to redirect to
// router.get('/callback', passport.authenticate('cognito-oauth2'), (req, res) => {
//   res.redirect('/profile');
// });

router.get('/login', passport.authenticate('openidconnect'));
router.get('/oauth2/redirect', passport.authenticate('openidconnect', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = router;
