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

  // $stateProvider.state('story.chapter1', {
  //   url: "/chapter1/:option",
  //   templateUrl: "partials/story.chapter1.html",
  //   controller: "UserCtrl"
  // });
  //
  // $stateProvider.state('story.chapter2', {
  //   url: "/chapter2/:option",
  //   templateUrl: "partials/story.chapter2.html",
  //   controller: "UserCtrl"
  // });


  //
  // $stateProvider.state('chapters', {
  //   url: "/chapters.optio",
  //   templateUrl: "partials/chapters.html",
  //   controller: "UserCtrl"
  // });
  //
  // $stateProvider.state('chapters.options')



});
