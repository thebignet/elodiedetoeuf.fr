'use strict';

angular.module('aVotreImage', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angular-flexslider',
  'piwik'
])
  .config(['$locationProvider','$routeProvider',function ($locationProvider,$routeProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/presentation.html',
        controller: 'MainCtrl'
      })
      .when('/illustratrice', {
        templateUrl: 'views/illustratrice.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/mariage', {
        templateUrl: 'views/mariage.html',
        controller: 'GalerieCtrl'
      })
      .when('/bapteme', {
        templateUrl: 'views/bapteme.html',
        controller: 'GalerieCtrl'
      })
      .when('/babyshower', {
        templateUrl: 'views/babyshower.html',
        controller: 'GalerieCtrl'
      })
      .when('/tarifs', {
        templateUrl: 'views/tarifs.html',
        controller: 'TarifCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
