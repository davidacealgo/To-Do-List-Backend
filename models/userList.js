var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : 'First name cannot be blank'
    },
    lastName : {
        type : String,
        required : 'Last name cannot be blank'
    }
});
var userList = mongoose.model('userList' , userSchema);

module.exports = userList; 