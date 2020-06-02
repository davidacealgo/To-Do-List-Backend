var app = express(),
createError = require('http-errors'),
cookieParser = require('cookie-parser'),
express = require('express'),
logger = require('morgan'),
path = require('path'),
port = process.env.PORT || 3000;

var indexRouter = require('./routes/index');
var toDoRouter = require('./routes/toDo');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/toDo", toDoRouter);

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log("Server listening in port: " + port));

module.exports = app;
