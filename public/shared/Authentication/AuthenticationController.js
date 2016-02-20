angular.module('dreamApp.authentication').controller('AuthenticationController', ['$scope', '$state', 'AuthenticationService', 
  function ($scope, $state, AuthenticationService) {
    console.log('in AuthenticationController');
    
    console.log("state: ", $state.current.name);

    $scope.login = function(user) {
      console.log(user);
      AuthenticationService.authenticate(user);
    }
  }
]);
