angular.module('dreamApp.profile').controller('ProfileController',ProfileController);

ProfileController.$inject = ['$scope','ProfileService'];

function ProfileController($scope,ProfileService) {
	$scope.contacts = [];
	
	$scope.mentor = {
	};
	
	$scope.contacts = [
//		{
//			name: "Linda Rothchild",
//			relationship: "Mother",
//			email: "rothchildFam@gmail.com"
//		},
//		{
//			name: "Name",
//			relationship: "Relationship",
//			email: "Email"
//		}
//		
	];
	
	var removeNullContact = function(){
		var i=0;
		while( i<$scope.contacts.length ){
			if ($scope.contacts[i].name == undefined && $scope.contacts[i].phone == undefined)
				$scope.contacts.splice(i,1);
			else
				i++;
		}
	}
	
	ProfileService.get_mentor_info(localStorage.userEmail, function(response){
		var data = response.data[0];
		
		$scope.mentor.firstname = data.FirstName;
		$scope.mentor.lastname = data.LastName;
		$scope.mentor.phone = data.Phone;
		$scope.mentor.address = data.npe01__Home_Address__c;
		
		$scope.contacts[0] = {
			name: $scope.mentor.Emergency_Contact_Name_1__c,
			phone: $scope.mentor.Emergency_Contact_Phone_1__c
		}
				
		$scope.contacts[1] = {
			name: $scope.mentor.Emergency_Contact_Name_2__c,
			phone: $scope.mentor.Emergency_Contact_Phone_2__c
		}

		removeNullContact();
		
	});
	
	$scope.submit = function(){
		if(document.profileForm.mentorFirst.value != ""){
			$scope.mentor.firstname = $scope.newFirst;
		}
		if (document.profileForm.mentorLast.value != ""){
			$scope.mentor.lastname = $scope.newLast;
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