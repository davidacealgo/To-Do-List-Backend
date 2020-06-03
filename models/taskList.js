var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : "Name cannot be blank"
    },
    status : {
        type : String,
        required : "Status cannot be blank" 
    },
    created_at : { 
        type : Date,
        default : Date.now
    }
});
var taskList = mongoose.model('taskList' , taskSchema);

module.exports = taskList; 