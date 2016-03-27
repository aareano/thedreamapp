angular.module('dreamApp.attendance').controller('AttendanceController', AttendanceController);

AttendanceController.$inject = ['$scope'/*,'ProfileService'*/];

function AttendanceController($scope) {
  console.log("in AttendanceController");

  $scope.menteesList = ["Fred", "Ben", "Flora", "Nick", "Ginetta"];
  
  if (localStorage.getItem('attendance_entries') == null) {
    $scope.attendance_entries = [];
  } else {
    $scope.attendance_entries = JSON.parse(localStorage['attendance_entries']);
  }
  edit_index = -1;

  $scope.save = function() {
    var jSumm = $scope.newEvent;
    var entry = {};
    for (i = 0 ; i<$scope.menteesList.length ; i++){
      var mentee = document.getElementById($scope.menteesList[i]);
      if (mentee.checked){
        entry[mentee.value] = true;
      }
      else {
        entry[mentee.value] = false;            }
    }

    for (i in entry){
      if (i != 'entry' && i != 'summary' && i != 'data')
        console.log( i + ': ' + entry[i] + '<br />');
    }

    var atten_entry = {'entry':entry,'summary':jSumm,'date':document.getElementById('eventDate').value};
    if (edit_index != -1) {
      $scope.attendance_entries[edit_index] = atten_entry;
    } else {
      $scope.attendance_entries.unshift(atten_entry);
    }
    $scope.attendance_entries.sort(compare);
    localStorage.setItem('attendance_entries', angular.toJson($scope.attendance_entries));
    edit_index = -1;
  };

    $scope.remove = function(item) {
      for (var i = item.$index; i < $scope.attendance_entries.length-1; i++) {
        $scope.attendance_entries[i] = $scope.attendance_entries[i + 1];
      }
      $scope.attendance_entries.pop();
      localStorage.setItem('attendance_entries', angular.toJson($scope.attendance_entries));
    };

    $scope.edit = function(item) {
      document.getElementById('eventDate').value = $scope.attendance_entries[item.$index]['date'];
      document.getElementById('summary').value = $scope.attendance_entries[item.$index]['summary'];
      document.getElementById('entry').value = $scope.attendance_entries[item.$index]['entry'];
      
      for (i = 0 ; i<$scope.menteesList.length ; i++){
        var mentee = document.getElementById($scope.menteesList[i]);
        //console.log($scope.attendance_entries[item.$index]['entry'][$scope.menteesList[i]]);          }
      }

      $scope.newEntry = $scope.attendance_entries[item.$index]['entry'];
      $scope.newSummary = $scope.attendance_entries[item.$index]['summary'];
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