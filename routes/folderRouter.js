const { Router } = require('express');
const folderController = require('../controllers/folderController');

const router = Router();

router.get('', folderController.getFolders);
router.get('/create', folderController.getCreateFolder);
router.post('/create', folderController.postCreateFolder);
router.get('/update/:id', folderController.getUpdateFolder);
router.post('/update/:id', folderController.postUpdateFolder);
router.post('/delete/:id', folderController.deleteFolder);

module.exports = router;
