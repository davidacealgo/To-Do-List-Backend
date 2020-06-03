var db = require("../models");

var controllers = {
    getAllTasks: function(req, res) {
        db.taskList.find().then(function(task) { 
            res.json(task);
        }).catch(function(err) { 
            res.send(err);
        });
    }
};

/*
exports.getAllTasks = function(req,res) { 
    db.taskList.find().then(function(task) { 
        console.log("estoy bien");
        res.json(task);
    }).catch(function(err) { 
        res.send(err);
    });
}
exports.createTask = function(req,res,next){ 
    db.taskList.create(req.body)
    .then(async function (newTask) {
        console.log("estoy bien");
        newTask.save().then((task) => {
            res.send(task);
            console.log(task);
        }).catch((err) => res.status(404).send(err));
        await res.status(201).json(newTask);
    }).catch(async function(err){
        console.log("no estoy bien");
        await res.send(err);
    });
}

exports.showTask = function(req,res) {
    db.taskList.findById(req.params.id)
    .then(function(foundTask) { 
        res.json(foundTask);
    })
    .catch(function(err) { 
        res.send(err);
    });
}

exports.updateTask = function(req,res) { 
    db.taskList.findOneAndUpdate({ 
        _id : req.params.id 
    }, req.body, {new : true })
    .then(function(updateTask) { 
        res.json(updateTask);
    })
    .catch(function(err) { 
        res.send(err);
    });
}

exports.deleteTask = function(req, res) { 
    db.taskList.findByIdAndRemove(req.params.id)
    .then(function() { 
        res.json({ message : "To Do delete it! "})
    })
    .catch(function(err) { 
        res.send(err);
    });
}
*/
module.exports = controllers;
