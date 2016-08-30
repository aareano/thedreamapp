angular.module('dreamApp.nav_top').controller('NavTopController', ['$scope', 'AuthenticationService', '$http',
  function ($scope, AuthenticationService,$http) {
    console.log('in NavTopController');

    $scope.user;
    $scope.email;
    AuthenticationService.getUser(function(data) {
      $scope.user = data;
      $scope.email = data.password.email;

    });
    
	$http.get('/isChair', { params:{ user:localStorage.userEmail} })
            .then(function successCallback(response) {
				$scope.isChair = response.data;
            }, function errorCallback(response) {
			});
	  
    $scope.logout = function() {
      AuthenticationService.logout();
    };

    }
]);