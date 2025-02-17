const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcryptjs = require('bcryptjs');
const pool = require('./database/pool');
const user = require('./models/User');

passport.use(
  new LocalStrategy(function (username, password, done) {
    return user
      .getUserByUsername(username)
      .then((user) => {
        if (!user)
          return done(null, false, {
            message: 'There is no user with given username.',
          });
        return bcryptjs
          .compare(password, user.password_hash)
          .then((match) => ({ match, user }));
      })
      .then(({ match, user }) => {
        if (!match) return done(null, false, { message: 'Incorrect password' });
        return done(null, user);
      })
      .catch((err) => done(err));
  }),
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  return user
    .getUserById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

module.exports = passport;
