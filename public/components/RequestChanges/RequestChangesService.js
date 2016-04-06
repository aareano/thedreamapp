angular.module('dreamapp.RequestChanges').factory('RequestChangesService', ['$http', '$state', ReuqestChangesService]);

function RequestChangesService($http, $state) {
    return {
        
        send_request_changes: function(user) {
            $http.post('/send_request_changes')
            .then(function successCallback(response) {
                console.log()
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
