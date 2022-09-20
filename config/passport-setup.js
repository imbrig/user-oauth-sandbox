const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

// cookie find user id
passport.serializeUser((user, done) => {
  done(null, user);
});

// send the id to the request
passport.deserializeUser((user, done) => {
  done(null, user);
});

// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     cb(null, { id: user.id, username: user.username, name: user.name });
//   });
// });
// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

passport.use(
  new GoogleStrategy({
    // options for the google strat
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect',
    scope: ['profile'],
    state: true
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('passport callback function fired');
    console.log(profile);
    done(null, profile);
  })
);