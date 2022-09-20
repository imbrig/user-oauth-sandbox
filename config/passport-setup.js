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

function verify(accessToken, refreshToken, profile, done) {
  // passport callback function
  console.log('passport callback function fired');
  console.log(profile);
  return done(null, profile);
}

const googleOptions = {
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: '/auth/callback',
  scope: ['profile']
};

passport.use( new GoogleStrategy(googleOptions, verify));
