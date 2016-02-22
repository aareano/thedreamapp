angular.module('dreamApp.attendance').controller('AttendanceController', AttendanceController);

AttendanceController.$inject = ['$scope'/*,'ProfileService'*/];

function AttendanceController($scope) {
  console.log("in AttendanceController");

  $scope.menteesList = ["Fred", "Ben", "Flora", "Nick", "Ginetta"];
  
  if (localStorage.getItem('journals') == null) {
    $scope.journals = [];
  } else {
    $scope.journals = JSON.parse(localStorage['journals']);
  }
  edit_index = -1;

  $scope.save = function() {
    var jEntry = $scope.newEntry;
    var jSumm = $scope.newEvent;
    var entry = {'entry': jEntry, 'summary': jSumm,
    'date': document.getElementById('eventDate').value};
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
      if (edit_index != -1) {
        $scope.journals[edit_index] = entry;
      } else {
        $scope.journals.unshift(entry);
      }
      $scope.journals.sort(compare);
      localStorage.setItem('journals', angular.toJson($scope.journals));
      edit_index = -1;
    };

    $scope.remove = function(item) {
      for (var i = item.$index; i < $scope.journals.length-1; i++) {
        $scope.journals[i] = $scope.journals[i + 1];
      }
      $scope.journals.pop();
      localStorage.setItem('journals', angular.toJson($scope.journals));
    };

    $scope.edit = function(item) {
      document.getElementById('datepicker').value = $scope.journals[item.$index]['date'];
      document.getElementById('summary').value = $scope.journals[item.$index]['summary'];
      document.getElementById('entry').value = $scope.journals[item.$index]['entry'];
      $scope.newEntry = $scope.journals[item.$index]['entry'];
      $scope.newSummary = $scope.journals[item.$index]['summary'];
      edit_index = item.$index;
    };

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