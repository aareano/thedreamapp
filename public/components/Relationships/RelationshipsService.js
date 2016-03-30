angular.module('dreamApp.MenteeInfo').factory('RelationshipsService', ['$http', 'state', RelationshipsService]);        

function Relationships($http, $state) {
    return {
        // call to fill emergency contact box
        get_emergency_contacts : function (user, callback) {
            $http.get('/get_emergency_contact', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        // call to fill family contact box
        get_family_contacts : function (user, callback) {
            $http.get('/get_family_contact', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        }  
    }
};