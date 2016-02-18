angular.module('dreamApp.authentication').controller('AuthenticationController', AuthenticationController);

function AuthenticationController($scope, AuthenticationService) {
  console.log('in AuthenticationController');
  
  $scope.login = function(user) {
    console.log(user);
    AuthenticationService.authenticate(user);
  }
}

// public/js/services/NerdService.js
angular.module('dreamApp.authentication').factory('AuthenticationService', ['$http', function($http) {
  return {
    // call to authenticate the user with firebase
    authenticate : function(user) {
      $http.post('/api/authenticate', { username: user.email, password: user.password })
           .then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
              console.log('succcess! response: ')
              console.log(response);
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              console.log('error :( response: ');
              console.log(response);
            });
    }
  }
}]);
