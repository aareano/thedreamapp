angular.module('dreamApp').config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/slider');
  
  $stateProvider
    .state('slider',{
      url: '/slider',
      templateUrl: 'components/homepage/slider.html',
      controller: 'HomepageController'
  })
    .state('profile',{
      url: '/profile',
      templateUrl: 'components/profile/profile.html',
      controller: 'ProfileController'
  })
    .state('relationships',{
      url: '/relationships',
      templateUrl: 'components/relationships/relationships.html',
      controller: 'RelationshipsController'
  })
    .state('journal',{
      url: '/journal',
      templateUrl: 'components/journal/journals.html',
      controller: 'JournalController'
  })
      .state('request_changes',{
      url: '/request_changes',
      templateUrl: 'components/request_changes/request_changes.html',
      controller: 'RequestChangesController'
  })
    .state('mentee_info',{
      url: '/mentee_info',
      templateUrl: 'components/mentee_info/mentee_info.html',
      controller: 'InfoController'
  });
});