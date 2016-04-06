angular.module('dreamApp.request_changes').controller('RequestChangesController', RequestChangesController);

RequestChangesController.$inject = ['$scope'/*,'RequestChanges'*/];

function RequestChangesController($scope) {
    console.log("in RequestChangesController");
    
    RequestChangesService.send_request_changes (function(response) {
        $scope.
    })
}