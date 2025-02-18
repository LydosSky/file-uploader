const asyncHandler = require('express-async-handler');
const user = require('../models/User');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

exports.getUserSignUP = asyncHandler(function (req, res) {
  res.render('sign-up', { title: 'SignUp' });
});

exports.getUserLogIn = asyncHandler(function (req, res) {
  res.render('log-in', { title: 'LogIn' });
});

exports.postUserSignUp = asyncHandler(function (req, res) {
  res.send('USER post sign-up');
  const errors = validationResult(req);
  if (!errors.isEmpty())
    res.render('sign-up', { title: 'SignUp', errors: errors.array() });
  const { username, email, password } = req.body;
  bcryptjs
    .hash(password, 10)
    .then((password_hash) =>
      user.createUser({ username, email, password_hash }),
    )
    .then(() => res.redirect('/auth/log-in'))
    .catch((err) => res.render('sign-up', { title: 'SignUp', errors: err }));
});

exports.postUserLogIn = asyncHandler(function (req, res) {
  const errors = validationResult(body).isEmpty();
  if (!errors.isEmpty())
    res.render('log-in', { title: 'LogIn', errors: errors.array() });
});

exports.postUserLogOut = asyncHandler(function (req, res) {
  res.send('USER post log-out');
});
