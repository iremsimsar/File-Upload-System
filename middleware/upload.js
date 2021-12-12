const fs = require('fs')
const nanoid = require('nano-id')
const http = require('https')
const multer = require('multer')

const FileUpload  = {

    //Multi Picture upload for different key
    multiUploadPicture: (req, res, next) => {

        const Storage = multer.diskStorage({
            destination: function (req, file, callback) {
                callback(null, 'uploads')
            },
            filename: function (req, file, callback) {
                callback(null, nanoid(5) + file.originalname)
            }
        })

        const upload = multer({
            storage: Storage
        }).fields([{ name: 'files', maxCount: 1 }, { name: 'files1', maxCount: 1}])

        upload(req, res, (err) => {
            next()
        })
    }

}

module.exports = FileUpload