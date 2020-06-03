'use strict'
const controller = require('../controllers/tasks');

module.exports = function(app) {
    app.get('/tasks', controller.getAllTasks);
    app.post('/tasks', controller.createTask);
};
