angular.module('dreamApp.mentee_info').controller('MenteeInfoController', MenteeInfoController);

MenteeInfoController.$inject = ['$scope'/*,'ProfileService'*/];

function MenteeInfoController($scope) {
  
  $scope.update_expanded = function(id, target) {
    $('#' + target).collapse("toggle");
    var element = document.getElementById(id);
    var target = document.getElementById(target);
    var expanded = target.getAttribute("aria-expanded");
    //expanded = $scope.expanded == "true" ? true:false;
    element.children[0].children[0].className = expanded == "true" ? "fa fa-chevron-up":"fa fa-chevron-down";
    //console.log($scope.expanded);
  };

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
  
  
  $scope.emergency_contacts = [
  {
    name: "Andrea Johnson",
    phone: "603-643-1287",
    relationship: "Mother",
    address: '52 East Wheelock St, Hanover NH',
    email: 'andrea.johnson@gmail.com'
  },
  {
    name: "Frank Johnson",
    phone: "603-643-1287",
    relationship: "Father",
    address: '52 East Wheelock St, Hanover NH',
    email: 'frank.johnson@gmail.com'
  }
  ];

  $scope.family_contacts = [
  {
    name: "Andrea Johnson",
    phone: "603-643-1287",
    relationship: "Mother",
    address: '52 East Wheelock St, Hanover NH',
    email: 'andrea.johnson@gmail.com'
  },
  {
    name: "Frank Johnson",
    phone: "603-643-1287",
    relationship: "Father",
    address: '52 East Wheelock St, Hanover NH',
    email: 'frank.johnson@gmail.com'
  },
  {
    name:'Michael Johnson', 
    relationship:'Brother', 
    phone: '603-686-9753',
    address: 'Cohen Hall Darthmouth University, Hanover NH',
    email: 'michael.johnson@dartmouth.edu'
  },
  {
    name:'Sarah Johnson', 
    relationship:'Sister', 
    phone: '603-686-9365',
    address: 'Bissel Hall Dartmouth University, Hanover NH',
    email: 'sarah.johnson@dartmouth.edu'
  }
  ];
}