// this file creates an aws s3 bucket for storing log images

// import aws sdk and uuid
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// set the region
AWS.config.update({ region: 'us-west-1' });

// create s3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// create the parameters for calling createBucket
const bucketParams = {
    Bucket: 'angler-logbook-user-images-' + uuidv4()
};

// call s3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
    err ? console.log(err) : console.log('Success: S3 bucket created.');
});