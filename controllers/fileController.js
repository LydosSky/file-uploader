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

exports.getFileById = asyncHandler((req, res) =>
  file.getFileById(parseInt(req.params.id)).then((file) =>
    res.render('file-details', {
      title: 'File Details',
      file: { ...file, createdAt: file.createdAt.toUTCString() },
    }),
  ),
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

exports.postFileDownload = asyncHandler((req, res) =>
  file.getFileById(parseInt(req.params.id)).then((file) => {
    res.setHeader('Content-Disposition', `attachment; filename="${file.name}"`);
    return res.sendFile(file.path);
  }),
);
