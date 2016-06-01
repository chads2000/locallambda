/*
AWS.config.update({
  region:"us-east-1",
  endpoint: "http://localhost:9000",
});
*/

//var dynamodb = new AWS.DynamoDB();
/*
var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});
var tableName = "local.aws.dynamo";
var params = {
     "TableName": tableName
 };
 */
 /*
function getProjects(res) {
  /*
    dynamodb.scan(params, function(err, data) {
        if (err){
            console.log(JSON.stringify(err, null, 2));
            //context.fail('ERROR: Dynamo failed: ' + err);
        } else {
            console.log(JSON.stringify(data, null, 2));
            console.log('Dynamo Success: ' + JSON.stringify(data, null, '  '));
            projects=data.Items ;
            //context.succeed('SUCCESS');
        }
        res.json(projects);
    });
    */
/*
    docClient.scan(params, function(err, data) {
      if (err) {
          //console.log(JSON.stringify(err, null, 2));
      } else {
          //console.log(JSON.stringify(data, null, 2));
          //console.log(JSON.stringify(data.Items));
          projects=data.Items;
      }
      res.json(projects);
    });
    //  project=lambda();
    //  res.json(projects);
  }
*/
var projects;
var contextObj = function(resolve){
  var res = resolve;
  this.succeed = function(data){
    console.log('Context', data);
    projects=data.Items ;
    res.json(projects);
  }
  this.error = function(error){
    console.error(error);
  }
};

module.exports = function (app) {
    // api ---------------------------------------------------------------------
    // get all projects

    app.get('/', function (req, res) {

      var context = new contextObj(res);

      var event = {
        "tableName": "local.aws.dynamo",
        "operation": "list",
        "payload": {
              "TableName": "local.aws.dynamo"
        }
      };

      var lambda = require('../../lambda/testDynamo.js');

              //getProjects(res);
              // use dynamo to get all projects from database
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      lambda.handler(event, context);

    });
    /*
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname + '/app/public/index.html'));
    });
    */
};
