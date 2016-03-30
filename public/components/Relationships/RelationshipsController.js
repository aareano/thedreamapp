angular.module('dreamApp.relationships').controller('RelationshipsController', RelationshipsController);

RelationshipsController.$inject = ['$scope'/*, 'Relationships'*/];

function RelationshipsController($scope) {
    console.log("in RelationshipsController");
    
    RelationshipsService.get_emergency_contacts (function(response) {
        $scope.emergency_contacts = response.emergency_contacts
    });
    /*
		{
			name: "Andrea Johnson",
			phone: "603-643-1287",
			relationship: "Mother",
            address: '52 East Wheelock St, Hanover NH',
            email: 'andrea.johnson@gmail.com'
		}
        */

    RelationshipsService.get_family_contacts (function(response) {
        $scope.family_contacts = response.family_contacts
    });
     /*
        {
			name: "Andrea Johnson",
			phone: "603-643-1287",
			relationship: "Mother",
            address: '52 East Wheelock St, Hanover NH',
            email: 'andrea.johnson@gmail.com'
		}
        */
}