const fs = require('fs')
const path = require('path')

const FileController = {

    files: (req, res) => {

        const directoryPath = path.join(process.cwd(), 'Uploads')

        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                return res.status(500).send('Baby we ran into a bug')
            }
            return res.status(200).json({
                files:files
            })
        })

    },

    singleUpload: (req, res) => {
        if (req.file.length <= 0) {
            return res.status(400).send(`You must select 1 file`)
        }

        return res.status(200).send(`File has been uploaded.`)
    },

    multiUpload: (req, res) => {

        if (Object.keys(req.files).length <= 0) {
            return res.status(400).send(`You must select files`)
        }

        return res.status(200).send('Files has been uploaded.')
    },

    deleteFile: (req, res) => {

        const fileName = req.params.fileName

        if (!fileName) {
            return res.status(400).send(`Please write filename`)
        }

        const path = path.join(process.cwd(), 'uploads', fileName)

        if (fs.existsSync(path)) {
            fs.unlink(path, err => {
                if (err) {
                    return res.status(500).send('File is not deleted')
                }
                return res.status(200).send('File has been deleted')
            })
        }

    }

}

module.exports = FileController