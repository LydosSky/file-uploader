const expressAsyncHandler = require('express-async-handler');
const folder = require('../models/Folder');

exports.getFolders = expressAsyncHandler((req, res) =>
  folder.getFolders().then((response) => res.send(response)),
);

exports.getFolderById = expressAsyncHandler((req, res) =>
  res.send(`Folder id is ${req.params}`),
);

exports.getCreateFolder = expressAsyncHandler((req, res) =>
  res.render('create-folder-form', { title: 'Create Folder' }),
);

exports.postCreateFolder = expressAsyncHandler((req, res) =>
  folder
    .createFolder({ name: req.body.name, storageId: req.user.storage.id })
    .then(() => res.redirect('/storage')),
);

exports.getUpdateFolder = expressAsyncHandler((req, res) =>
  folder.getFolderById(parseInt(req.params.id)).then((folder) =>
    res.render('update-folder-form', {
      title: 'Update Folder',
      folder,
    }),
  ),
);

exports.postUpdateFolder = expressAsyncHandler((req, res) =>
  folder
    .updateFolder({ id: parseInt(req.params.id), name: req.body.name })
    .then(() => res.redirect('/storage')),
);

exports.deleteFolder = expressAsyncHandler((req, res) =>
  folder
    .deleteFolder(parseInt(req.params.id))
    .then(() => res.redirect('/storage')),
);
