const { Router } = require('express');
const authenticationController = require('../controllers/authenticationController');
const signUpValidator = require('../validators/signUpValidator');
const loginValidator = require('../validators/loginValidator');
const passport = require('../passport');

const router = Router();
router.get('/sign-up', authenticationController.getUserSignUP);
router.get('/log-in', authenticationController.getUserLogIn);
router.post(
  '/sign-up',
  signUpValidator,
  authenticationController.postUserSignUp,
);
router.post(
  '/log-in',
  loginValidator,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/log-in',
  }),
  authenticationController.postUserLogIn,
);
router.post('/log-out', authenticationController.postUserLogOut);

module.exports = router;
