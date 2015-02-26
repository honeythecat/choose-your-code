catCoder.controller("UserCtrl", function UserCtrl($scope, $state, CatFactory) {
  $scope.CatFactory = CatFactory;
  $scope.user = CatFactory.user[0];
  $scope.addUser = function() {
    $scope.user = CatFactory.buildUser();
    $state.go("story");
  }
  $scope.addPoints = function() {
    $scope.user.points = CatFactory.addPoints();
  };
  $scope.subtractPoints = function() {
    $scope.user.points = CatFactory.subtractPoints();
  };

});
