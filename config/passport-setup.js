const passport = require('passport');
const CognitoStrategy = require('./cognito-oauth2');
const keys = require('./keys');

// cookie find user id
passport.serializeUser((user, done) => {
  done(null, user);
});

// send the id to the request
passport.deserializeUser((user, done) => {
  done(null, user);
});

function verify(req, accessToken, refreshToken, profile, done) {
  // passport callback function
  console.log('passport callback function fired');
  console.log(profile);
  return done(null, profile);
};

const cognitoOptions = {
  clientID: keys.cognito.clientID,
  clientSecret: keys.cognito.clientSecret,
  callbackURL: '/auth/callback',
  passReqToCallback: true,
  scope: ['openid'],
  clientDomain: keys.cognito.clientDomain
};
passport.use(new CognitoStrategy(cognitoOptions, verify));
