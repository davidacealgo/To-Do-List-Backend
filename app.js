var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

var routes = require('./routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
routes(app);

app.listen(port, function() {
  console.log('Server started on port'+port);
});

module.exports = app;