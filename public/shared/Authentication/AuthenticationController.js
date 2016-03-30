angular.module('dreamApp.authentication').controller('AuthenticationController', ['$scope', '$state', 'AuthenticationService', 
  function ($scope, $state, AuthenticationService) {
    console.log('in AuthenticationController, state: ', $state.current.name);

    $scope.elem = "hi";

    $scope.login = function(user) {
      console.log(user);
      AuthenticationService.login(user);
    }

    $scope.register = function(user) {
      console.log(user);
      AuthenticationService.register(user);
    }

    $scope.deleteuser = function(user) {
      console.log(user);
      AuthenticationService.deleteuser(user);
    }

    $scope.changePassword = function(user) {
      console.log(user);
      AuthenticationService.changePassword(user);
    }

    $scope.changeEmail = function(user) {
      console.log(user);
      AuthenticationService.changeEmail(user);
    }

    $scope.resetPassword = function(user) {
      console.log(user);
      AuthenticationService.resetPassword(user);
    }

  }
]);

angular.module('dreamApp.authentication').controller('TempAuthenticationController', ['$scope', '$state', 'AuthenticationService', 
  function ($scope, $state, AuthenticationService) {
    console.log('in TempAuthenticationController, state: ', $state.current.name);

    $scope.elem = "hi";

    $scope.login = function(user) {
      console.log(user);
      AuthenticationService.login(user);
    }

    $scope.register = function(user) {
      console.log(user);
      AuthenticationService.register(user);
    }

    $scope.deleteuser = function(user) {
      console.log(user);
      AuthenticationService.deleteuser(user);
    }

    $scope.changePassword = function(user) {
      console.log(user);
      AuthenticationService.changePassword(user);
    }

    $scope.changeEmail = function(user) {
      console.log(user);
      AuthenticationService.changeEmail(user);
    }

    $scope.resetPassword = function(user) {
      console.log(user);
      AuthenticationService.resetPassword(user);
    }

  }
]);