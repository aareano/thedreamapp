angular.module('dreamApp.profile')
	.controller('ProfileController',ProfileController);

ProfileController.$inject = ['$scope'/*,'ProfileService'*/];

function ProfileController($scope) {
	$scope.mentee = {
		name: "Andrew Johnson",
		dob: "12/1/2012"
	};
	
	$scope.mentor = {
		firstname: "Samuel",
		lastname: "Rothchild",
		email: "samuel.rothchild@gmail.com",
		phone: "603-643-7426",
		address: "Maxwell Hall Dartmouth University, Hanover, NH"
	};
	
	$scope.contacts = [
		{
			name: "Linda Rothchild",
			relationship: "Mother",
			email: "rothchildFam@gmail.com"
		},
		{
			name: "Name",
			relationship: "Relationship",
			email: "Email"
		}
		
	];
	
	$scope.submit = function(){
		if(document.profileForm.mentorFirst.value != ""){
			$scope.mentor.firstname = $scope.newFirst;
		}
		if (document.profileForm.mentorLast.value != ""){
			$scope.mentor.lastname = $scope.newLast;
		}
		if (document.profileForm.mentorEmail.value != ""){
			$scope.mentor.email = $scope.newEmail;
		}
		if (document.profileForm.mentorPhone.value != ""){
			$scope.mentor.phone = $scope.newPhone;
		}
		if (document.profileForm.mentorAddress.value != ""){
			$scope.mentor.address = $scope.newAddress;
		}
		
		for (var i=0; i<$scope.contacts.length; i++){
			if (document.getElementById("name" + i).value != "")
				$scope.contacts[i].name = document.getElementById("name" + i).value;
			if (document.getElementById("email" + i).value != "")
				$scope.contacts[i].email = document.getElementById("email" + i).value;
			$scope.contacts[i].relationship = document.getElementById("picker" + i).value;
		}
		
		document.profileForm.reset();
		document.emergency.reset();
	}
	
}