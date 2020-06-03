var db = require("../models");

exports.getAllTasks = (req,res) => {
    db.taskList.find()
    .then((task) => {
        res.send(task);
    }).catch((err) => { 
        res.send(err);
    });
}

exports.createTask = (req, res) => { 
    db.taskList.create(req.body)
    .then((newTask) => {
        newTask.save().then((task) => {
            res.send(task);
        }).catch((err) => res.status(404).send(err));
        res.status(201).json(newTask);
    }).catch((err) => {
        res.send(err);
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

/*
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
