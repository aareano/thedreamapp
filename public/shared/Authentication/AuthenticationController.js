angular.module('dreamApp.authentication').controller('AuthenticationController', ['$scope', '$state', 'AuthenticationService', 
  function ($scope, $state, AuthenticationService) {
    console.log('in AuthenticationController, state: ', $state.current.name);

    $scope.elem = "hi";
    $scope.reserror = "";

    $scope.login = function(user) {
      console.log(user);
      AuthenticationService.login(user, function(response) {
        $scope.reserror = response;
      });
    }

    $scope.register = function(user) {
      console.log(user);
      AuthenticationService.register(user, function(response) {
        $scope.reserror = response;
        console.log($scope.reserror);
      });
    }

    $scope.deleteuser = function(user) {
      console.log(user);
      AuthenticationService.deleteuser(user, function(response) {
        $scope.reserror = response;
      });
    }

    $scope.changePassword = function(user) {
      console.log(user);
      AuthenticationService.changePassword(user, function(response) {
        $scope.reserror = response;
      });
    }

    $scope.changeEmail = function(user) {
      console.log(user);
      AuthenticationService.changeEmail(user, function(response) {
        $scope.reserror = response;
      });
    }

    $scope.resetPassword = function(user) {
      console.log(user);
      AuthenticationService.resetPassword(user, function(response) {
        $scope.reserror = response;
      });
    }

  }
]);