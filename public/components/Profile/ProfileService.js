angular.module('dreamApp.MenteeInfo').factory('ProfileService', ['$http', '$state', ProfileService]);

function ProfileService($http, $state) {
    return {
        
        /* 
            Sample mentor info
            {"first_name": "Judy",
             "last_name": "Sagan",
             "birth_date": "03/14/1993",
             "university": "Tufts University",
             "phone":"6189993123",
             "email":"judy.sagan@tufts.edu"}
        */
        get_mentor_info: function (user, callback) {
            $http.get('/get_mentor_info', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        
        /* 
            Sample mentor contacts
            [{"first_name":"Rotana",
              "last_name":"Shaker",
              "phone":"2223334455"},
             {"first_name":"Paul",
              "last_name":"Shaker",
              "phone":"6198324545"}]
        */
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