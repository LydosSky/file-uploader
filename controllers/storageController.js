const expressAsyncHandler = require('express-async-handler');
const storage = require('../models/Storage');

exports.getStorage = expressAsyncHandler((req, res) =>
  storage
    .getStorageByUserId(req.user.id)
    .then((storage) => res.render('storage', { title: 'Storage', storage })),
);
