var express = require("express"), 
router = express.Router(), 
helpers = require("../helpers/toDo");


// Routers // 
router.route("/")
.get(helpers.getAllToDo)
.post(helpers.createToDo)
  
router.route("/:id")
.get(helpers.showToDo)
.put(helpers.updateToDo)
.delete(helpers.deleteToDo)

module.exports = router;
