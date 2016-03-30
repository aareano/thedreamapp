angular.module('dreamApp.mentee_info').controller('MenteeInfoController', MenteeInfoController);

MenteeInfoController.$inject = ['$scope'/*,'ProfileService'*/];

function MenteeInfoController($scope) {
  console.log("in MenteeInfoController");
    
    MenteeInfoService.get_mentee_info (function(response) {
        $scope.mentee_info = response.mentee_info
    });                 
   /*
   $scope.mentee_info = {
    name: "Andrew Johnson",
    age: "13",
    gender: "Male"
  };
  */

    MenteeInfoService.get_personal_info (function(response) {
        $scope.personal_info = response.get_personal_info
    });
 /*            
  $scope.personal = {
    houseLang: "Spanish",
    address: "52 East Wheelock St, Hanover NH",
    email: "aj2002@gmail.com",
    birthDate: "12/1/2002" 
  };
  */
    
    MenteeInfoService.get_health_info (function(response) {
        $scope.health_info = response.health.info
    });
    /*
  $scope.health = {
    physician: "Lawrence Aldrich",
    physPhone: "603-643-1287",
    meds: "None",
    swallowPills: "Yes",
    medConditions: "None",
    allergies: "Gluten"
  };
  */
}