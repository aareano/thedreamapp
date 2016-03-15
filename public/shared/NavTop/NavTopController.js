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


    var http = new XMLHttpRequest();
    var url = "/user";
    http.open("GET", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
          var response = JSON.parse(http.responseText);
          $scope.email = response.password.email;
          console.log(response);
      }
    };
    http.send();
    
    $scope.logout = function() {
      var http2 = new XMLHttpRequest();
      var url = "/logout";
      http2.open("POST", url, true);
      http2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http2.onreadystatechange = function() {
        if (http2.readyState == 4 && http2.status == 200) {
            window.location = "../Authentication/login.html"
        }
      };
      http2.send();
    };

    }
]);