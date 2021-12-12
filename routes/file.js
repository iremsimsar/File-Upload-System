const express = require('express')
const multer = require('multer')
const router = express.Router()
const upload = multer({ dest: 'uploads/' })

const middleware = require('../middleware/upload')
const controller = require('../controller/upload')

router.get('/', controller.files)
router.post('/upload/single', upload.single('picture'), controller.singleUpload)
router.post('/upload/multi', middleware.multiUploadPicture, controller.multiUpload)
router.delete('/:fileName', controller.deleteFile)


module.exports = router;
