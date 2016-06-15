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
