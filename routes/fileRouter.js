const { Router } = require('express');
const fileController = require('../controllers/fileController');
const router = Router();

router.get('/', fileController.getFileAdd);

module.exports = router;
