var projects;
var lambda = require('../../lambda/index.js');
var event = require('../../lambda/event.json');
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
      //getProjects(res);
      // use dynamo to get all projects from database
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      lambda.handler(event, context);
    });
};
