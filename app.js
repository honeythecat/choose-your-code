var catCoder = angular.module("catCoder", ["ui.router"]);

catCoder.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});
