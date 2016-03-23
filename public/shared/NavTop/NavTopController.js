angular.module('dreamApp.nav_top').controller('NavTopController', ['$scope', 'AuthenticationService', 
  function ($scope, AuthenticationService) {
    console.log('in NavTopController');

    $scope.user;
    $scope.email;
    AuthenticationService.getUser(function(data) {
      $scope.user = data;
      $scope.email = data.password.email;

    });
    
    $scope.logout = function() {
      AuthenticationService.logout();
    };

    }
]);