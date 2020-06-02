var mongoose = require("mongoose") ; 

mongoose.set('debug' , true) ;
mongoose.connect("mongodb://dbUser:todolist@todocluster-yfxbl.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true }) ;

mongoose.Promise = Promise ;

module.exports.toDoList = require("./toDoList") ;