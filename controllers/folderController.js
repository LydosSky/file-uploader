const expressAsyncHandler = require('express-async-handler');
const folder = require('../models/Folder');

exports.createFolder = expressAsyncHandler((req, res) =>
  res.send('Create Folder'),
);
exports.getFolders = expressAsyncHandler((req, res) => res.send('Get Folders'));
exports.getFolderById = expressAsyncHandler((req, res) =>
  res.send(`Folder id is ${req.params}`),
);
exports.updateFolder = expressAsyncHandler((req, res) =>
  res.send('Folder Updated'),
);

exports.deleteFolder = expressAsyncHandler((req, res) =>
  res.send('Folder Deleted'),
);
