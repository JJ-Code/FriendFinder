//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//================================================
//Express config (telling node creating an express server):
var app = express();
var PORT = process.env.PORT || 8880;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//================================================
//Router Config (map of how to respond users visits or requests (urls)):
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//================================================
//Listner Config (starts server):
app.listen(PORT, function(){
  console.log("App is listening on port: " + PORT);
});
