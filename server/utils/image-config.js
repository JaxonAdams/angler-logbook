// this utility module prepares an image for s3 storage when uploaded to server

// import required modules
const { v4: uuidv4 } = require('uuid');

// function which sets up and returns image params obj
const params = fileName => {
    // get file type
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    // define params object
    const imageParams = {
        Bucket: 'angler-logbook-user-images-761ea8f4-8e3a-4316-a870-ac152a1ab515',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
        ACL: 'public-read'
    };

    return imageParams;
};

module.exports = params;