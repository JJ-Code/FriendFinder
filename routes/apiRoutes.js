//load data:

var friendsData = require('../data/friends');

module.exports = function(app) {

  //api get request
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  }); //end of get request

  //api post request
  app.post("/api/new", function(req, res) {
    var userData = req.body;
    friendDataArr.push(userData);
    res.json(userData);

  }); //end of post request

}; //end of export
