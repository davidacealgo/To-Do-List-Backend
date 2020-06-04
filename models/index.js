var mongoose = require("mongoose") ; 

mongoose.set('debug' , true) ;
mongoose
.connect(
    "mongodb+srv://dbUser:todolist@todocluster-yfxbl.mongodb.net/test?retryWrites=true&w=majority", 
    {useUnifiedTopology: true, useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

mongoose.Promise = Promise ;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports.taskList = require("./taskList");
module.exports.userList = require("./userList") ;