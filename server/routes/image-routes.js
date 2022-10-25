// this file handles the route used to upload an image to the aws s3 bucket

// import required modules
const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');

const paramsConfig = require('../utils/image-config');

// create temporary container to hold image until ready to send to s3 bucket
const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    }
});

// upload object, contains storage destination and key (image)
const upload = multer({ storage }).single('image');

// S3 service object
const s3 = new AWS.S3({
    apiVersion: '2006-03-01'
});

// POST send image to S3 bucket /api/images/image-upload
router.post('/image-upload', upload, (req, res) => {
    // configure params
    const params = paramsConfig(req.file);

    s3.upload(params, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        } else {
            res.json(data);
        };
    });
});

module.exports = router;