console.log('Loading function');
var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient({
  region:"us-east-1",
  endpoint: "http://localhost:9000",
  accessKeyId:"accessKeyId",
  secretAccessKey:"accessKeyId",
  sessionToken:"random"
});

/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of the operations in the switch statement below
 *   - tableName: required for operations that interact with DynamoDB
 *   - payload: a parameter to pass to the operation being performed
 */
exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
};
