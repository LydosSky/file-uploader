const { Router } = require('express');
const storageController = require('../controllers/storageController');

const router = Router();

router.get('', storageController.getStorage);

module.exports = router;
