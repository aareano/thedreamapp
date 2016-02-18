angular.module('dreamApp.nav_top').controller('SessionController', SessionController);

SessionController.$inject = ['$scope'];

function SessionController($scope) {
  console.log('in SessionController');
  
  function login(user) {
    console.log(user);
  }
}