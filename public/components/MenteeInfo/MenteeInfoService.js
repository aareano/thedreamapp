angular.module('dreamApp.MenteeInfo').factory('MenteeInfoService', ['$http', '$state', MenteeInfoService]);

function MenteeInfoService($http, $state) {
    return {
        // call to fill mentee_info box
        /*
            Sample mentee info:
            {"first_name": "Fred",
             "last_name": "Smith",
             "birth_date": "03/14/1999",
             "school": "Medford Middle School",
             "home_address": "311 Boston Ave, Medford MA 02155",
             "home_phone":"4145267870",
             "guardian_1_name":"Lily Smith",
             "guardian_1_email":"lily.smith@gmail.com",
             "guardian_2_name":"Paul Smith",
             "guardian_2_email":"paul.smith@gmail.com"}
        */
        get_mentee_info: function(user, callback) {
            $http.get('/get_mentee_info', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(repsonse) {
                console.log(response);
            });     
        },
        // call to fill the personal info box
        /*
            Sample mentee info:
            {"religion": "Christian",
             "special needs": "no",
             "extra_notes": ""}
        */
        get_personal_info: function(user, callback) {
            $http.get('/get_personal_info', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        // call to fill the health info box
        /*
            Sample mentee info:
            {"dietary_restrictions": "none",
             "allergies": "seafood, lactose intolerant, dust",
             "asthma": "no",
             "learning_disabilities": "none"}
        */
        get_health_info: function(user, callback) {
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