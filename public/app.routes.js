angular.module('dreamApp').config(function($stateProvider, $urlRouterProvider){

  // ui-router - http://www.funnyant.com/angularjs-ui-router/

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state("login", {
      url: "/login",
      views: {
        "content": {
          controller: "SessionController",
          templateUrl: "shared/Session/login.html"
        }
      }
    })
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
    .state("root.profile", {
      url: "profile",
      views: {
        'content@': {
          controller: "ProfileController",
          templateUrl: "components/Profile/profile.html"
        }
      }
    })
    .state("root.attendance", {
      url: "attendance",
      views: {
        'content@': {
          controller: "AttendanceController",
          templateUrl: "components/Attendance/attendance.html"
        }
      }
    })
    .state("root.mentee_info", {
      url: "mentee_info",
      views: {
        'content@': {
          controller: "MenteeInfoController",
          templateUrl: "components/MenteeInfo/mentee_info.html"
        }
      }
    })
    .state("root.request_changes", {
      url: "request_changes",
      views: {
        'content@': {
          controller: "RequestChangesController",
          templateUrl: "components/RequestChanges/request_changes.html"
        }
      }
    });
});

// don't use '#'s in URLs
angular.module('dreamApp').config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);