var db = require("../models");

exports.getAllUsers = (req,res) => {
    db.userList.find()
    .then((users) => {
        res.send(users);
    }).catch((err) => { 
        res.send(err);
    });
}

exports.createUser = (req, res) => { 
    db.userList.create(req.body)
    .then((newUser) => {
        res.status(201).json(newUser);
    }).catch((err) => {
        res.status(400).json({"reason": err.message});
    });
}

