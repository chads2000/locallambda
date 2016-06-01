exports.handler = function(event, context, callback) {
  console.log('Loading event');
var projects;
var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient({
  region:"us-east-1",
  endpoint: "http://localhost:9000",
  accessKeyId:"accessKeyId",
  secretAccessKey:"accessKeyId",
  sessionToken:"random"
});
var tableName = "local.aws.dynamo";
var params = {
     "TableName": tableName
 };
  docClient.scan(params, function(err, data) {
    if (err) {
        //console.log(JSON.stringify(err, null, 2));
        context.fail('ERROR: Dynamo failed: ' + err);
    } else {
        //console.log(JSON.stringify(data, null, 2));
        //console.log(JSON.stringify(data.Items));
        projects=data.Items;
        callback(null, JSON.stringify(projects));
        context.succeed(projects);
    }
  });
}
