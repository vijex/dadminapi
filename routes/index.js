var express = require('express');
var router = express.Router();
var fileUploadController = require('../controllers/fileUpload');
var homePageController = require('../controllers/homePage');

router.get('/', homePageController.getHomepage);
router.post('/upload', fileUploadController.upload.single('file'), fileUploadController.postFileUpload);

module.exports = router;