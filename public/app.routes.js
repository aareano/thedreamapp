angular.module('dreamApp').config(function($stateProvider, $urlRouterProvider){

  // ui-router - http://www.funnyant.com/angularjs-ui-router/

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state("root", {
      url: "/",
      views: {
        "navLeft": {
          controller: "NavLeftController",
          templateUrl: "shared/NavLeft/nav_left.html"
        },
        "navTop": {
          controller: "NavTopController",
          templateUrl: "shared/NavTop/nav_top.html"
        },
        "content": {
          controller: "HomeController",
          templateUrl: "components/Home/slider.html"
        }
      }
    })
    .state("profile", {
      url: "/profile",
      views: {

      }
    });
});

// don't use '#'s in URLs
angular.module('dreamApp').config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);