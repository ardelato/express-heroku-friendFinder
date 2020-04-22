var express = require("express");
var path = require("path");
var router = express.Router();

var friends = require("../data/friends");

// /api/friends GET
// Will display a JSON of all possible friends
router.get("/api/friends", function (req, res) {
  //   console.log("Friends are: ");
  //   console.table(friends);
  res.send(friends);
});
// /api/friends POST
// Will handle the incoming survey results and handle the compatibility logic

router.post("/api/friends", function (req, res) {
  //   console.log(req);
  //   console.log(req.body);
  var newFriend = req.body;
  console.log(newFriend);
  friends.push(newFriend);
});

module.exports = router;
