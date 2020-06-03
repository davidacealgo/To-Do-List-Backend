var express = require("express"), 
router = express.Router(), 
helpers = require("../helpers/toDo");

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/createToDo', function(req, res){
    helpers.createToDo
});
  
// Routers // 
//router.route('/').get(helpers.getAllToDo());

//router.route('/createToDo').post(helpers.createToDo);

//router.route("/:").get(helpers.showToDo)
router.route('/updateToDo').put(helpers.updateToDo);
router.route('/deleteToDo').delete(helpers.deleteToDo);

module.exports = router;
