angular.module('dreamApp.MenteeInfo').factory('MenteeInfoService', ['$http', '$state', MenteeInfoService]);

function MenteeInfoService($http, $state) {
    return {
        // call to fill mentee_info box
        get_mentee_info : function(user, callback) {
            $http.get('/get_mentee_info', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(repsonse) {
                console.log(response);
            });     
        },
        // call to fill the personal info box
        get_personal_info : function(user, callback) {
            $http.get('/get_personal_info', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        // call to fill the health info box
        get_health_info : function(user, callback) {
            $http.get('/get_health_info', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
};