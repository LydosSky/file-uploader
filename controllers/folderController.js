const expressAsyncHandler = require('express-async-handler');
const folder = require('../models/Folder');

exports.getCreateFolder = expressAsyncHandler((req, res) =>
  res.render('create-folder-form', { title: 'Create Folder' }),
);
exports.postCreateFolder = expressAsyncHandler((req, res) =>
  folder
    .createFolder({ name: req.body.name, storageId: req.user.storage.id })
    .then(res.redirect('/storage')),
);
exports.getFolders = expressAsyncHandler((req, res) => res.send('Get Folders'));
exports.getFolderById = expressAsyncHandler((req, res) =>
  res.send(`Folder id is ${req.params}`),

exports.getUpdateFolder = expressAsyncHandler((req, res) =>
  folder
    .getFolderById(parseInt(req.params.id))
    .then((folder) =>
      res.render('update-folder-form', { title: 'Update Folder', folder }),
    ),
);

exports.postUpdateFolder = expressAsyncHandler((req, res) =>
  folder
    .updateFolder({ id: parseInt(req.params.id), name: req.body.name })
    .then(() => res.redirect('/storage')),
);

exports.updateFolder = expressAsyncHandler((req, res) =>
  res.send('Folder Updated'),
);

exports.deleteFolder = expressAsyncHandler((req, res) =>
  res.send('Folder Deleted'),
);
