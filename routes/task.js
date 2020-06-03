'use strict'
const controller = require('../controllers/tasks');

module.exports = function(app) {
    app.route('/getTasks').get(controller.getAllTasks);
}
