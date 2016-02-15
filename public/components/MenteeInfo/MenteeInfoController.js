angular.module('dreamApp.mentee_info').controller('MenteeInfoController', MenteeInfoController);

MenteeInfoController.$inject = ['$scope'/*,'ProfileService'*/];

function MenteeInfoController($scope) {

  $scope.mentee = {
    name: "Andrew Johnson",
    age: "13",
    gender: "Male"
  };

  $scope.personal = {
    houseLang: "Spanish",
    address: "52 East Wheelock St, Hanover NH",
    email: "aj2002@gmail.com",
    birthDate: "12/1/2002"
    
  };
  
  $scope.health = {
    physician: "Lawrence Aldrich",
    physPhone: "603-643-1287",
    meds: "None",
    swallowPills: "Yes",
    medConditions: "None",
    allergies: "Gluten"
    
  };
  
  $scope.contacts = [
    {
      name: "Andrea Johnson",
      phone: "603-643-1287",
      relationship: "Mother"
    },
    {
      name: "Frank Johnson",
      phone: "603-643-1287",
      relationship: "Father"
    }
  ];
}