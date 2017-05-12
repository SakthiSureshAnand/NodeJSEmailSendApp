var express = require("express");
var http = require("http");
var path = require("path");
var models = require("./models");
var router = require("./routes/routes");
var logger = require("morgan");
var app = express();
var clientPath = path.resolve(__dirname, "client");

// for automatically calling this token "f" when the nodejs program
// starts ... using below method and add that reference in to the listen method
var alwaysExcutWhnstartup = require("./controllers/TestActivitiesController");

app.use(logger("dev"));
app.use("/",express.static(clientPath));
app.use("/", router);

/*module.exports = {
    app: app
}*/

 models.sequelize.sync().then(function () {
  var server = app.listen(3000, function() {

  	// Whenever node js  Start up the below function excutes
  	alwaysExcutWhnstartup.getAll_testnoun()
    console.log('Express server listening on port ' + server.address().port);
  });
});