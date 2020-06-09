var express = require('express');
var app = express();
var cors = require("cors");
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var routes = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());
routes(app);

app.listen(port, function() {
  console.log('Server started on port'+port);
});

module.exports = app;
