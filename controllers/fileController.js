const file = require('../models/File');
const asyncHandler = require('express-async-handler');

exports.getFileAdd = asyncHandler((req, res) =>
  res.render('file-create-form', { title: 'Add File' }),
);
