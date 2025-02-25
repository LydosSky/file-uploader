const multer = require('multer');
const path = require('path');

// Path where files resides
const uploadPath = path.join(__dirname, 'uploads');

// storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports = multer({ storage: storage });
