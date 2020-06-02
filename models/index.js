var mongoose = require("mongoose") ; 

mongoose.set('debug' , true) ;
mongoose.connect("mongodb://dbUser:todolist@todocluster-yfxbl.mongodb.net/test?retryWrites=true&w=majority") ;

mongoose.Promise = Promise ;

module.exports.Todo = require("./toDoList") ;