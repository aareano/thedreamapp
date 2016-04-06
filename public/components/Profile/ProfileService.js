angular.module('dreamApp.MenteeInfo').factory('ProfileService', ['$http', '$state', ProfileService]);

function ProfileService($http, $state) {
    return {
        
        get_mentor_info: function (user, callback) {
            $http.get('/get_mentor_info', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        
        get_mentor_contacts: function (user, callback) {
            $http.get('/get_mentor_contacts', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
};