// public/shared/Authentication/AuthenticationService.js

angular.module('dreamApp.authentication').factory('AuthenticationService', ['$http', '$state', '$window', AuthenticationService]);
angular.module('dreamApp.nav_top').factory('AuthenticationService', ['$http', '$state', '$window', AuthenticationService]);
  
function AuthenticationService($http, $state, $window) {
  return {
    // call to authenticate the user with firebase
    login : function(user, callback) {
      $http.post('/login', user)
            // successCallback called asynchronously
            // when the response is available
           .then(function successCallback(response) {
              callback(response);
              $window.location.href = '/'   // should use $location?

              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              callback(response);
            });
    },
    // call to log the user out of firebase
    logout: function() {
      $http.post('/logout')
           .then(function successCallback(response) {
              console.log(response);
              $window.location.href = '/login';
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              console.log(response);
            });
    },
    // call to create a new user in firebase
    register: function(user, callback) {
      $http.post('/register', user)
           .then(function successCallback(response) {
              callback(response);
              $window.location.href = '/login';
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              callback(response);
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

    // TODO: create a frontend page for user deletion
    // will need input boxes w/ ng-models: 'user.username' and 'user.password'
    // called w/ ng-click="deleteuser(user)"
    // call to delete the user from firebase
    deleteuser: function(user, callback) {
      $http.post('/deleteuser', user)
           .then(function successCallback(response) {
              callback(response);
              $window.location.href = '/login'
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              callback(response);
            });
    },

    // TODO: create a frontend page for password change
    // will need input boxes w/ ng-models: 'user.username', 'user.oldpassword', and 'user.newpassword'
    // called w/ ng-click="changePassword(user)"
    // call to change user's password
    changePassword: function(user, callback) {
      $http.post('/changePassword', user)
           .then(function successCallback(response) {
              callback(response);
              $window.location.href = '/login'
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              callback(response);
            });
    },

    // TODO: create a frontend page for email change.
    // will need input boxes w/ ng-models: 'user.oldusername', 'user.newusername', and 'user.password'
    // called w/ ng-click="changeEmail(user)"
    // call to change user's email
    changeEmail: function(user, callback) {
      $http.post('/changeEmail', user)
           .then(function successCallback(response) {
              callback(response);
              $window.location.href = '/login'
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              callback(response);
            });
    },

    // TODO: create a frontend page for password reset
    // will need input boxes w/ ng-model: 'user.username'
    // called w/ ng-click="resetPassword(user)"
    // call to reset user's password
    resetPassword: function(user, callback) {
      $http.post('/resetPassword', user)
           .then(function successCallback(response) {
              callback(response);
              $window.location.href = '/login'
            
              // errorCallback called asynchronously if an error occurs
              // or server returns response with an error status.
            }, function errorCallback(response) {
              callback(response);
            });
    }
  }
};
