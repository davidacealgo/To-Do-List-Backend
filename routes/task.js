'use strict'
const controller = require('../controllers/tasks');

module.exports = function(app) {
    app.get('/tasks', controller.getAllTasks);
    app.post('/tasks', controller.createTask);
    app.get('/tasks/:id', controller.showTask);
    app.put('/tasks/:id', controller.updateTask);
    app.delete('/tasks/:id', controller.deleteTask);
};
