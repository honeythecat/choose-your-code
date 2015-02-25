catCoder.controller("UserCtrl", function UserCtrl($scope, CatFactory) {
  $scope.CatFactory = CatFactory
  $scope.addUser = function() {
    $scope.user = CatFactory.buildUser();
  }
});
