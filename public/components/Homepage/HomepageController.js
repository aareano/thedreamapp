angular.module('dreamApp.homepage')
    .controller('HomepageController', HomepageController);

HomepageController.$inject = ['$scope'];

function HomepageController($scope) {
    $(document).ready(function(){
        $('#mygallery').justifiedGallery({
            rowHeight : 160,
            lastRow : 'justify',
            margins : 10
        });
    });                              
}