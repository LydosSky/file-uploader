const asyncHandler = require('express-async-handler');

exports.getUserSignUP = asyncHandler(function (req, res) {
  res.render('sign-up', { title: 'SignUp' });
});

exports.getUserLogIn = asyncHandler(function (req, res) {
  res.render('log-in', { title: 'LogIn' });
});

exports.postUserSignUp = asyncHandler(function (req, res) {
  res.send('USER post sign-up');
});

exports.postUserLogIn = asyncHandler(function (req, res) {
  res.send('USER post log-in');
});

exports.postUserLogOut = asyncHandler(function (req, res) {
  res.send('USER post log-out');
});
