var express = require("express");
var router = express.Router();
var controller = require("../../controllers/TestActivitiesController")
router.post("/TestNoun", controller.create_TestNoun);

// Testing purpose get request ....getAll_testnoun
router.get("/testData",controller.getAll_testnoun);

module.exports = router;