angular.module('dreamApp.nav_top').controller('NavTopController', ['$scope', 'AuthenticationService', 
  function ($scope, AuthenticationService) {
    console.log('in NavTopController');

    $('#logout').on('click', function() {
      AuthenticationService.logout();
    });
  }
]);