angular.module('dreamApp.attendance').controller('AttendanceController', AttendanceController);

AttendanceController.$inject = ['$scope','AttendanceService'];

function AttendanceController($scope,AttendanceService) {
	var entryToSalesforceEntry = function(entry){
		var sfEntries = [];
		
		if (entry == null)
			return sfEntries;
		
		for (child in entry) {
			var sfEntry = {};
			sfEntry.Youth__c = entry[child].Id;
			sfEntry.Present__c = entry[child].present;
			sfEntry.Id = entry[child].attenId
			sfEntries.push(sfEntry);
		}
		
		return sfEntries;
	}
	
	var extractIds = function(atten_entry, data){
		for (key in data){
			if (key == 'Id' || key == 'newEntry') continue;
			atten_entry.entry[key].attenId = data[key];
		}
		atten_entry.entry.Id = data.Id;

	}
	
	var saveEntries = function(atten_entry){
		AttendanceService.post_attendance(localStorage.userEmail, {date:atten_entry.date,category:atten_entry.summary,entries:entryToSalesforceEntry(atten_entry.entry),fridayId:atten_entry.entry.Id},function(response){
			if (response.data.newEntry){
				extractIds(atten_entry, response.data);
			}
			console.log(atten_entry)
		});	
	}
	
	var extractNames = function(contacts){
		list = [];
		
		if (contacts.length == 0)
			return list;
		
		for (var i=0; i < contacts.length; i++){
			list.push({Name:contacts[i].Name, Id:contacts[i].Id});
		}
		return list;
	}
	
	var extractEntries = function(data){		
		atten_entries = [];
		
		if (data == null)
			return null;
		
		for (i=0; i<data.length; i++){
			
			entries = data[i].Attendance__r.records;
			fridayId = data[i].Id;
			category = data[i].Event_category__c;
			date = data[i].Friday_Date__c;
			
			var attendance = {};
			
			for (j = 0; j < entries.length; j++){	


				// Set Fields
				attendance.Id = fridayId;

				attendance[entries[j].Youth__r.Id] = {Name:entries[j].Youth__r.Name, Id:entries[j].Youth__r.Id, present:entries[j].Present__c, attenId: entries[j].Id};

			}
			
			var atten_entry = {'entry':attendance, 'summary':category, 'date':date};

			atten_entries.push(atten_entry);
		}
		
		return atten_entries;
	}
	
	AttendanceService.mentee_attendance_list(localStorage.userEmail,function(response){
		$scope.menteesList = extractNames(response.data[0].Contacts.records);
	});
	
	AttendanceService.attendance_list(localStorage.userEmail,function(response){
		$scope.attendance_entries = extractEntries(response.data);
		console.log(response)
	});
	  
	if (localStorage.getItem('attendance_entries') == null) {
		$scope.attendance_entries = [];
	} else {
		$scope.attendance_entries = JSON.parse(localStorage['attendance_entries']);
	}
	edit_index = -1;

  $scope.save = function() {
    var entry = {};
    for (i = 0 ; i<$scope.menteesList.length ; i++){
      var mentee = document.getElementById($scope.menteesList[i].Id);
      if (mentee.checked){
		$scope.menteesList[i].present = true;
		// IMPORTANT - Must stringify then parse (deep copy) for edit to work
        entry[mentee.value] = JSON.parse(angular.toJson($scope.menteesList[i]));
      }
      else {
		$scope.menteesList[i].present = false;
        entry[mentee.value] = JSON.parse(angular.toJson($scope.menteesList[i]));            
	  }
	  if (edit_index != -1){
		  entry[mentee.value].attenId = $scope.attendance_entries[edit_index].entry[mentee.value].attenId;
	  }
    }

	var atten_entry = {'entry':entry,'summary':$scope.newEvent,'date':$scope.newDate};
	  
    if (edit_index != -1) {
	  var fridayId = $scope.attendance_entries[edit_index].entry.Id;
	  atten_entry.entry.Id = fridayId;
      $scope.attendance_entries[edit_index] = atten_entry;
    } else {
      $scope.attendance_entries.unshift(atten_entry);
    }
    $scope.attendance_entries.sort();

	localStorage.setItem('attendance_entries', angular.toJson($scope.attendance_entries));
    edit_index = -1;
	  
	saveEntries(atten_entry);
  };

    $scope.remove = function(item) {
      for (var i = item.$index; i < $scope.attendance_entries.length-1; i++) {
        $scope.attendance_entries[i] = $scope.attendance_entries[i + 1];
      }
      $scope.attendance_entries.pop();
      localStorage.setItem('attendance_entries', angular.toJson($scope.attendance_entries));
    };

    $scope.edit = function(item) {
      //document.getElementById('eventDate').value = $scope.attendance_entries[item.$index]['date'];
      //document.getElementById('summary').value = $scope.attendance_entries[item.$index]['summary'];
      //document.getElementById('entry').value = $scope.attendance_entries[item.$index]['entry'];
      for (id in $scope.attendance_entries[item.$index].entry){
		var mentee = document.getElementById(id);
		if (mentee == null) continue;

		mentee.checked = $scope.attendance_entries[item.$index].entry[id].present;
        //console.log($scope.attendance_entries[item.$index]['entry'][$scope.menteesList[i]]);          }
      }

      $scope.newDate = new Date($scope.attendance_entries[item.$index]['date']);
      $scope.newEvent = $scope.attendance_entries[item.$index]['summary'];
      edit_index = item.$index;
    };
/*
  This function is no longer needed
 */
/*
    $scope.view = function(item) {
      var journalid = "#journal" + item.$index;
      var viewid = "#view" + item.$index;
      $(journalid).toggleClass('collapse');
      if ($(viewid).html() == "View Entry »") {
        $(viewid).html("Hide Entry &raquo;");
      } else {
        $(viewid).html("View Entry &raquo;");
      }
    }
*/
    function compare(a,b) {
		console.log(a,b)
      a_date = a['date'].split('/');
      b_date = b['date'].split('/')
      if (a_date[2] < b_date[2]) {
        return -1;
      } else if (a_date[2] > b_date[2]) {
        return 1;
      } else if (a_date[0] < b_date[0]) {
        return -1;
      } else if (a_date[0] > b_date[0]) {
        return 1;
      } else if (a_date[1] < b_date[1]) {
        return -1;
      } else if (a_date[1] > b_date[1]) {
        return 1;
      } else {
        return 0;
      }
    }

  }