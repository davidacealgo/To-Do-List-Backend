var mongoose = require("mongoose") ;

var toDoListSchema = new mongoose.Schema({
    archived : {
        type : Boolean,
        default : false 
    },
    name : {
        type : String,
        required : "Name cannot be blank"
    },
    completed : {
        type : Boolean,
        default : false 
    },
    created_at : { 
        type : Date,
        default : Date.now
    },
    inProgress : {
        type : Boolean,
        default : false 
    }, 
    open : {
        type : Boolean,
        default : false 
    }
});
var toDoList = mongoose.model('ToDoList' , toDoListSchema) ;

module.exports = toDoList ; 