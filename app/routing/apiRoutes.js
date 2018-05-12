var friends = require("../data/friends.js");

module.exports = function (app){
  app.get("/api/friends", function(req, res){
      res.json(friends);
  });

  app.post("/api/friends", function(req, res){
    
    varbestMatch ={
      name: "",
      photo: "",
      friendDifference: 1000
    };

  var userData = req.body;
  var userScores = userData.scores;

  var totalDifference = 0;

  for (var i = 0; i<friends.length; i++){
    console.log(friends[i].name);
    totalDifference = 0;

      for (var x = 0; x < friends[i].scores; x++){
        totalDifference += Math.abs(parseInt(userScores[x])- parseInt(friends[i].scores[x]));
        if (totalDifference<= bestMatch.friendDifference){

          bestMatch.name = friends[i].name;
          bestMatch.photo= friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        } 
      }
    }

  friends.push(userData);
  res.json(bestMatch);
  });

}

