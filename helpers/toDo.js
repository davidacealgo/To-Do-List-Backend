var db = require("../models");

exports.getAllToDo = function(req,res) { 
    db.toDoList.find().then(function(toDo) { 
        console.log("estoy bien");
        res.json(toDo);
    }).catch(function(err) { 
        res.send(err);
    });
}

exports.createToDo = function(req,res){ 
    db.toDoList.create(req.body)
    .then(async function (newToDo) {
        console.log("estoy bien")
        await res.status(201).json(newToDo);
        await newToDo.save();
    }).catch(async function(err){
        console.log("no estoy bien")
        await res.send(err);
    });
}

exports.showToDo = function(req,res) {
    db.toDoList.findById(req.params.id)
    .then(function(foundToDo) { 
        res.json(foundToDo);
    })
    .catch(function(err) { 
        res.send(err);
    });
}

exports.updateToDo = function(req,res) { 
    db.toDoList.findOneAndUpdate({ 
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
    db.toDoList.findByIdAndRemove(req.params.id)
    .then(function() { 
        res.json({ message : "To Do delete it! "})
    })
    .catch(function(err) { 
        res.send(err);
    });
}

module.exports = exports;
