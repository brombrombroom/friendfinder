
  // * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var bestFriend = {
      name: "",
      photo: "",
      friendDiff: Infinity
    };

    var userData = req.body;
    var userScores = userData.scores;

    var diff;

//iterate thru friends array of objs
      friends.forEach(function(i){
        currentFriend = i;
        diff = 0;
        console.log(currentFriend.name)
      })

currentFriend.scores.forEach(function(j){
  var currentFriendScore = currentFriend.scores[j];
  var currentUserScore = userScores[j];
  totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
})

  if (totalDifference <= bestFriend.friendDiff) {
        bestFriend.name = currentFriend.name;
        bestFriend.photo = currentFriend.photo;
        bestFriend.friendDiff = totalDifference;
      }
    }

    friends.push(userData);

    res.json(bestFriend);
});
};

};
