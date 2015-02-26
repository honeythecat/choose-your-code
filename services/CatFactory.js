catCoder.factory('CatFactory', function CatFactory() {
  var factory = {};
  factory.user = [];

  factory.buildUser = function() {
    points = 0;
    pointsForUserName = {
      Bob: 1,
      Bob2: 2,
      Bob3: 3,
      Bob4: 4,
      Bob5: 5
    };
    pointsForGender = {
      Female: 100,
      Male: 100,
      Other: 100
    };
    pointsForSpirit = {
      Feral: 502,
      Fancy: 418,
      Nyan: 256,
      Code: 405,
      Newbie: 404
    };
    pointsForTypeStyle = {
      Hunt: 50,
      Bang: 100,
      Touch: 101
    };
    pointsForOs = {
      Windows: 84,
      Mac: -76,
      Linux: 92,
      Google: 98
    };

    points += pointsForUserName[factory.username];
    points += pointsForGender[factory.gender];
    points += pointsForSpirit[factory.userSpirit];
    points += pointsForTypeStyle[factory.userType];
    points += pointsForOs[factory.userOs];

    var newUser = { name: factory.username, id: factory.user.length +1, points: points}
    factory.user.push(newUser);
    factory.username = null;
    // console.log(factory.user);
    return newUser;
  };

  return factory;

});
