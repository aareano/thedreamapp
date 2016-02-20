// public/shared/Authentication/AuthenticationService.js

angular.module('dreamApp.authentication').factory('AuthenticationService', ['$http', '$state', '$window', AuthenticationService]);
angular.module('dreamApp.nav_top').factory('AuthenticationService', ['$http', '$state', '$window', AuthenticationService]);
  
function AuthenticationService($http, $state, $window) {
  return {
    // call to authenticate the user with firebase
    authenticate : function(user) {
      $http.post('/api/authenticate', { username: user.email, password: user.password })
           .then(function successCallback(response) {
              
              // this callback will be called asynchronously
              // when the response is available
              
              console.log(response);
              $window.location.href = '/'   // should use $location?
            
            }, function errorCallback(response) {
              
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              
              console.log(response);

              showAlert({
                title: response.data.code,
                detail: response.data.message,
                className: 'alert-danger'
              });
            });
    },
    // call to log the user out of firebase
    logout: function() {
      $http.post('/api/logout')
           .then(function successCallback(response) {
              
              $window.location.href = '/login'   // should use $location?
            
            }, function errorCallback(response) {
              
              // TODO - deal with error
              
            });
    }
  }
};

// options for showing the alert box
function showAlert(opts) {
    var title = opts.title;
    var detail = opts.detail;
    var className = 'alert ' + opts.className;

    var alertBox = $('#alert');
    alertBox.removeClass().addClass(className);
    alertBox.children('#alert-title').text(title);
    alertBox.children('#alert-detail').text(detail);
}