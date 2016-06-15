console.log('Loading function');
var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient({
  region:"us-east-1",
  endpoint: "http://localhost:9000",
  accessKeyId:"accessKeyId",
  secretAccessKey:"accessKeyId",
  sessionToken:"random"
});
if (process.env.NODE_ENV=="production") {
  var docClient = new AWS.DynamoDB.DocumentClient();
} else {
  var docClient = new AWS.DynamoDB.DocumentClient({
    region:"us-east-1",
    endpoint: "http://localhost:9000",
    accessKeyId:"accessKeyId",
    secretAccessKey:"accessKeyId",
    sessionToken:"random"
  });
}
/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of the operations in the switch statement below
 *   - tableName: required for operations that interact with DynamoDB
 *   - payload: a parameter to pass to the operation being performed
 */
exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    var operation = event.operation;

    if (event.tableName) {
        event.payload.TableName = event.tableName;
    }

    switch (operation) {
        case 'create':
            docClient.putItem(event.payload, context);
            break;
        case 'read':
            docClient.getItem(event.payload, context);
            break;
        case 'update':
            docClient.updateItem(event.payload, context);
            break;
        case 'delete':
            docClient.deleteItem(event.payload, context);
            break;
        case 'list':
            docClient.scan(event.payload, function(err, data){
              if(err){
                return context.error('Error');
              }
              context.succeed(data);
            });
            break;
        case 'echo':
            context.succeed(null, "Success");
            break;
        case 'ping':
            context.succeed(null, "pong");
            break;
        default:
            context.succeed('Unknown operation: ${operation}');
    }
};
