angular.module('dreamApp.home').controller('HomeController', HomeController);

HomeController.$inject = ['$scope'];

function HomeController($scope) {
    //console.log("in HomeController");

    $(document).ready(function(){
        $('#mygallery').justifiedGallery({
            rowHeight : 160,
            lastRow : 'hide',
            margins : 15
        });
    });
}