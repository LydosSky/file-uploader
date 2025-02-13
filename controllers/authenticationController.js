const asyncHandler = require('express-async-handler');

exports.getUserSignUP = asyncHandler(function (req, res) {
  res.render('sign-up', { title: 'Signup' });
});
exports.getUserLogIn = asyncHandler(function (req, res) {
  res.send('USER get log-in');
});
exports.getUserLogOut = asyncHandler(function (req, res) {
  res.send('USER get log-out');
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
