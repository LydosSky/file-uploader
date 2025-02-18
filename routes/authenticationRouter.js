const { Router } = require('express');
const authenticationController = require('../controllers/authenticationController');

const router = Router();
router.get('/sign-up', authenticationController.getUserSignUP);
router.get('/log-in', authenticationController.getUserLogIn);
router.get('/log-out', authenticationController.getUserLogOut);
router.post('/sign-up', authenticationController.postUserSignUp);
router.post('/log-in', authenticationController.postUserLogIn);
router.post(
  '/sign-up',
  signUpValidator,
  authenticationController.postUserSignUp,
);
router.post('/log-out', authenticationController.postUserLogOut);

module.exports = router;
