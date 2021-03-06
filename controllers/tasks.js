var db = require("../models");
var mongoose = require('mongoose');

exports.getTasks = (req,res) => {
    db.taskList.find()
    .then((user) => {
        res.send(user);
    }).catch((err) => { 
        res.send(err);
    });
}

exports.assignTask = (req, res) => {
    db.taskList.findOneAndUpdate({ 
        _id : req.params.id
    }, req.body, {new : true })
    .then((updateTask) => {
        res.send(updateTask);
    })
    .catch((err) => {
        res.send(err);
    });
}

exports.deleteUserTask = (req, res) => {
    db.taskList.updateOne({ 
        _id : req.params.id
    }, {$unset: {user: ""}})
    .then(() => {
        res.send({ message : "User deleted of task!"})
    })
    .catch((err) => {
        res.send(err);
    });
}

exports.createTask = (req, res) => { 
    db.taskList.create(req.body)
    .then((newTask) => {
        res.status(201).json(newTask);
    }).catch((err) => {
        res.status(400).json({"reason": err.message});
    });
}

exports.showTask = (req, res) => {
    db.taskList.findById(req.params.id)
    .then((foundTask) => {
        res.send(foundTask);  
    })
    .catch((err) => { 
        res.send(err);
    });
}

exports.updateTask = (req,res) => { 
    db.taskList.findOneAndUpdate({ 
        _id : req.params.id 
    }, req.body, {new : true })
    .then((updateTask) => { 
        const status = req.body.status;
        if(status == 'Open' || status == 'In progress' || status == 'Closed' || status == 'Archived'){
            res.send(updateTask);
        } else {
            res.send({ message: 'Invalid status!'})
        }
    })
    .catch((err) => { 
        res.send(err);
    });
}

exports.deleteTask = (req, res) => { 
    db.taskList.findByIdAndRemove(req.params.id)
    .then(() => { 
        res.send({ message : "Task deleted! "})
    })
    .catch((err) => { 
        res.send(err);
    });
}
