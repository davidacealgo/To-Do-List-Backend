var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : 'Name cannot be blank'
    },
    description : {
        type: String
    },
    status : {
        type : String,
        default : 'Open' 
    },
    created_at : { 
        type : Date,
        default : Date.now
    },
    user : { type: mongoose.Schema.ObjectId, ref: "userList"}
});
var taskList = mongoose.model('taskList', taskSchema);

module.exports = taskList; 