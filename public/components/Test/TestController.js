angular.module('dreamApp.test').controller('TestController', TestController);

TestController.$inject = ['$scope'];

function TestController($scope) {
  console.log('in TestController');
  $scope.tagline = 'To the moon and back!'; 
}