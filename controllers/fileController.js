const { response } = require('express');
const file = require('../models/File');
const asyncHandler = require('express-async-handler');

exports.getFileAdd = asyncHandler((req, res) =>
  res.render('add-file-form', { title: 'Add File' }),
);

exports.postFileAdd = asyncHandler((req, res) =>
  file
    .createFile({
      name: req.file.filename,
      path: req.file.path,
      storageId: parseInt(req.user.storage.id),
      details: {
        encoding: req.file.encoding,
        size: req.file.size,
        mimetype: req.file.mimetype,
      },
    })
    .then(() => res.redirect('/storage')),
);

exports.getFileAddToFolder = asyncHandler((req, res) =>
  res.render('add-file-to-folder-form', {
    title: 'Add File',
    folderId: req.params.folderId,
  }),
);
exports.postFileAddToFolder = asyncHandler((req, res) =>
  file
    .createFile({
      name: req.file.filename,
      path: req.file.path,
      storageId: parseInt(req.user.storage.id),
      details: {
        encoding: req.file.encoding,
        size: req.file.size,
        mimetype: req.file.mimetype,
      },
      folderId: parseInt(req.params.folderId),
    })
    .then((responsee) => res.redirect('/storage')),
);

exports.postFileDelete = asyncHandler((req, res) =>
  file.deleteFile(parseInt(req.params.id)).then(() => res.redirect('/storage')),
);
