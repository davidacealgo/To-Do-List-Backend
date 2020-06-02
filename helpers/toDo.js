var db = require("../models");

exports.getAllToDo = function(req,res) { 
    db.ToDoList.find()
    .then(function(toDos) { 
        res.json(toDos);
    })
    .catch(function(err) { 
        res.send(err);
    });
}

exports.createToDo = function(req,res){ 
    db.ToDoList.create(req.body)
    .then(function (newToDo) {
            res.status(201).json(newToDo); 
            newToDo.save();
    })
    .catch(function(err){ 
            res.send(err);
    });
}

exports.showToDo = function(req,res) {
    db.ToDoList.findById(req.params.id)
    .then(function(foundToDo) { 
        res.json(foundToDo);
    })
    .catch(function(err) { 
        res.send(err);
    });
}

exports.updateToDo = function(req,res) { 
    db.ToDoList.findOneAndUpdate({ 
        _id : req.params.id 
    }, req.body, {new : true })
    .then(function(UpdatedToDo) { 
        res.json(UpdatedToDo);
    })
    .catch(function(err) { 
        res.send(err);
    });
}

exports.deleteToDo = function(req, res) { 
    db.ToDoList.findByIdAndRemove(req.params.id)
    .then(function() { 
        res.json({ message : "To Do delete it! "})
    })
    .catch(function(err) { 
        res.send(err);
    });
}

module.exports = exports;
