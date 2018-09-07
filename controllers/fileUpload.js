
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

var conn = require('../config/config');
var secrets = require('../config/secrets');
let gfs;

conn.connection.once('open', () => {
    gfs = Grid(conn.connection.db, mongoose.mongo);
    gfs.collection('upload');
});

const storage = new GridFsStorage({
    url: secrets.db,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
            if (err) {
                return reject(err);
            }
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
                filename: filename,
                bucketName: 'upload'
            };
            resolve(fileInfo);
            });
        });
    }
});

exports.upload = multer({ storage });

exports.postFileUpload = function (req, res, next) {
    res.json('file uploaded successfully...!i!');
}