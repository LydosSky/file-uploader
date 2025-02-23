const { Router } = require('express');
const folderController = require('../controllers/folderController');

const router = Router();

router.get('/create', folderController.getCreateFolder);
router.post('/create', folderController.postCreateFolder);
router.post('/delete', folderController.deleteFolder);

module.exports = router;
