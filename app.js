var catCoder = angular.module("catCoder", ["ui.router"]);

catCoder.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story', {
    url: "/story",
    templateUrl: "partials/story.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.beginning', {
    url: "/beginning",
    templateUrl: "partials/story.beginning.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.computer', {
    url: "/computer",
    templateUrl: "partials/story.computer.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.cry', {
    url: "/cry",
    templateUrl: "partials/story.cry.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.soup', {
    url: "/soup",
    templateUrl: "partials/story.soup.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.git', {
    url: "/git",
    templateUrl: "partials/story.git.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.kitchen', {
    url:"/kitchen",
    templateUrl: "partials/story.kitchen.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.clean', {
    url:"/clean",
    templateUrl: "partials/story.clean.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.break', {
    url:"/break",
    templateUrl: "partials/story.break.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.commitClean', {
    url:"/commitClean",
    templateUrl: "partials/story.commitClean.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.doNotCommitClean', {
    url:"/doNotCommitClean",
    templateUrl: "partials/story.doNotCommitClean.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('story.doNotCommitBroken', {
    url:"/doNotCommitBroken",
    templateUrl: "partials/story.doNotCommitBroken.html",
    controller: "UserCtrl"
  });




});
