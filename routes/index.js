'use strict'
const taskController = require('../controllers/tasks');
const userController = require('../controllers/users');

module.exports = function(app) {
    app.get('/tasks', taskController.getTasks);
    app.post('/tasks', taskController.createTask);
    app.get('/tasks/:id', taskController.showTask);
    app.put('/tasks/:id', taskController.updateTask);
    app.delete('/tasks/:id', taskController.deleteTask);

    app.put('/tasks/:id/user/', taskController.assignTask);
    app.delete('/tasks/:id/user/', taskController.deleteUserTask);

    app.get('/users', userController.getAllUsers);
    app.post('/users', userController.createUser);

    app.get('*', (req, res) => {
        res.send({message: 'ok'});
    })
};
