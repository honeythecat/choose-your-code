catCoder.factory('CatFactory', function CatFactory() {
  var factory = {};
  factory.users = [];

  factory.addUser = function(attributes) {
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

    points += pointsForUserName[attributes.userName];
    points += pointsForGender[attributes.gender];
    points += pointsForSpirit[attributes.spirit];
    points += pointsForTypeStyle[attributes.typeStyle];
    points += pointsForOs[attributes.os];

  };

  return factory;
});
