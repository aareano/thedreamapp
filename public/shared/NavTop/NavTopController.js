angular.module('dreamApp.nav_top').controller('NavTopController', ['$scope', 'AuthenticationService', 
  function ($scope, AuthenticationService) {
    console.log('in NavTopController');

    $scope.user;
    AuthenticationService.getUser(function(data) {
      $scope.user = data;
    });    

    $('#logout').on('click', function() {
      AuthenticationService.logout();
    });
  }
]);