// public/shared/Authentication/AuthenticationService.js

angular.module('dreamApp.authentication').factory('AuthenticationService', ['$http', '$state', '$window', AuthenticationService]);
angular.module('dreamApp.nav_top').factory('AuthenticationService', ['$http', '$state', '$window', AuthenticationService]);
  
function AuthenticationService($http, $state, $window) {
  return {
    // call to authenticate the user with firebase
    login : function(user) {
      $http.post('/login', user)
            // successCallback called asynchronously
            // when the response is available
           .then(function successCallback(response) {
              console.log(response);
              $window.location.href = '/'   // should use $location?

              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              console.log(response);
            });
    },
    // call to log the user out of firebase
    logout: function() {
      $http.post('/logout')
           .then(function successCallback(response) {
              $window.location.href = '/login'   // should use $location?
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              console.log(response);
            });
    },
    // call to create a new user in firebase
    register: function(user) {
      console.log(user);
      $http.post('/register', user)
           .then(function successCallback(response) {
              $window.location.href = '/login'   // should use $location?
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              console.log(response);
            });
    },
    // call to get the user authenticated with firebase
    getUser: function(callback) {
      $http.get('/user')
           .then(function successCallback(response) {
            
              console.log(response);
              console.log("called get user :)")
              callback(response.data);
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              console.log(response);
            });
    },

    // TODO: create a frontend page for user deletion; this has not been fully tested yet
    // call to delete the user from firebase
    deleteuser: function(callback) {
      $http.post('/deleteuser', user)
           .then(function successCallback(response) {
              $window.location.href = '/login'   // should use $location?
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              console.log(response);
            });
    }
  }
};
