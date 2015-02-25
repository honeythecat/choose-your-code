var catCoder = angular.module("catCoder", ["ui.router"]);

catCoder.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('user', {
    url: "/user",
    templateUrl: "partials/user.html",
    controller: "UserCtrl"
  });



});
