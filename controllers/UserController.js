catCoder.controller('UserCtrl', function UserCtrl($scope, CatFactory) {
  $scope.user = CatFactory.user;
  $scope.CatFactory = CatFactory;

  $scope.addUser = function() {
    CatFactory.addUser({
      userName: $scope.userName,
      gender: $scope.userGender,
      spirit: $scope.userSpirit,
      food: $scope.userFood,
      typeStyle: $scope.userType,
      os: $scope.userOs
    });


    //calculate the points!
