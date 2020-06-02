var express = require("express"), 
router = express.Router(), 
helpers = require("../helpers/toDo");

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
// Routers // 
router.route("/")
.get(helpers.getAllToDo)
.post(helpers.createToDo)
router.route("/:id")
.get(helpers.showToDo)
.put(helpers.updateToDo)
.delete(helpers.deleteToDo)

module.exports = router;
