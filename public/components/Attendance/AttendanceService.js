angular.module('dreamApp.Attendance').factory('AttendanceService', ['http', 'state', AttendanceService]);

function AttendanceService($http, $state) {
    return {
        
        activity_list: function(user, callback) {
            $http.get('/activity_list', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        
        mentee_attendance_list: function(user, callback) {
            $http.get('/mentee_attendance_list', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        
        attendance_list: function(user, callback) {
            $http.get('/attendance_list', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        
        post_attendance: function(user, callback) {
            $http.post('/post_attendace', user)
            .then(function successCallback(response) {
                console.log(response);
                callback(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
};
