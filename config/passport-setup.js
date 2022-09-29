const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');
// const CognitoStrategy = require('./cognito-oauth2');
const OpenIDConnectStrategy = require('passport-openidconnect');
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

// const googleOptions = {
//   clientID: keys.google.clientID,
//   clientSecret: keys.google.clientSecret,
//   callbackURL: '/auth/callback',
//   passReqToCallback: true,
//   scope: ['profile', 'email']
// };
// passport.use(new GoogleStrategy(googleOptions, verify));

// const cognitoOptions = {
//   clientID: keys.cognito.clientID,
//   clientSecret: keys.cognito.clientSecret,
//   callbackURL: '/auth/callback',
//   passReqToCallback: true,
//   scope: ['openid', 'profile', 'email'],
//   clientDomain: keys.cognito.clientDomain
// };
// passport.use(new CognitoStrategy(cognitoOptions, verify));

const openidOptions = {
  issuer: 'https://auth.image-metrics.com/',
  authorizationURL: 'https://auth.image-metrics.com',
  tokenURL: 'https://auth.image-metrics.com/oauth2/token',
  userInfoURL: 'https://auth.image-metrics.com/oauth2/userInfo',
  clientID: '1e4on286diq3rgqbopu0ldirjs',
  //clientSecret: 'sigphptavjm80qncadpaa1pmeu7lcdjmsahmhvrsukth2h9qnnu',
  callbackURL: 'http://localhost:3000/oauth2/redirect',
  passReqToCallback: true,
  scope: ['profile']
};
passport.use(new OpenIDConnectStrategy(openidOptions, verify));
