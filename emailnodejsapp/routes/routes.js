var express = require("express");
var api = express.Router();
var routers = require("./routers")
var bodyParser = require('body-parser');
api.use("/TestActivities", bodyParser.json({limit: '50mb'}), routers.TestActivitiesRouter);

module.exports = api;