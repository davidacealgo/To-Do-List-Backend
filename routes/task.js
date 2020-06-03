var express = require("express"), 
router = express.Router(), 
helpers = require("../helpers/tasks");

router.get('/', function(req, res, next) {
    helpers.getAllTasks
});

router.post('/task', function(req, res){
    helpers.createTask
});
  
// Routers // 
//router.route('/').get(helpers.getAllTasks());

//router.route('/task').post(helpers.createTask;
//router.route("/:").get(helpers.showTask)
router.route('/updateTask').put(helpers.updateTask);
router.route('/deleteTask').delete(helpers.deleteTask);

module.exports = router;
