const { body } = require('express-validator');

module.exports = [
  body('username')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 3, max: 254 })
    .withMessage('Username must be between 3 and 255 characters')
    .matches(/^[a-zA-Z0-9_-]+$/)
    .withMessage(
      'Username can only contain letters, numbers, underscores, and hyphens',
    ),
  body('email')
    .trim()
    .normalizeEmail()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  // )
  // .withMessage(
  //   'Password must contain atleast one lowercase letter, one uppercase letter, one number, and one special character',
  // ),
  body('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password)
        throw new Error('Passwords do not match');
      return true;
    }),
];
