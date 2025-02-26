const { Router } = require('express');
const upload = require('../multer');
const fileController = require('../controllers/fileController');

const router = Router();

router.get('/add', fileController.getFileAdd);
router.get('/add/:folderId', fileController.getFileAddToFolder);
router.get('/details/:id', fileController.getFileById);
router.post('/add', upload.single('file'), fileController.postFileAdd);
router.post(
  '/add/:folderId',
  upload.single('file'),
  fileController.postFileAddToFolder,
);
router.post('/delete/:id', fileController.postFileDelete);

module.exports = router;
