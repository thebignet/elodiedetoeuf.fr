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
		title: 'Présentation',
		templateUrl: 'views/presentation.html',
		controller: 'MainCtrl'
      })
      .when('/illustratrice', {
	  	title: 'Illustratrice',
		templateUrl: 'views/illustratrice.html',
		controller: 'MainCtrl'
      })
      .when('/contact', {
  	  	title: 'Contact',
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/mariage', {
  	  	title: 'Mariage',
        templateUrl: 'views/mariage.html',
        controller: 'GalerieCtrl'
      })
      .when('/bapteme', {
  	  	title: 'Baptême',
        templateUrl: 'views/bapteme.html',
        controller: 'GalerieCtrl'
      })
      .when('/babyshower', {
  	  	title: 'Baby Shower',
        templateUrl: 'views/babyshower.html',
        controller: 'GalerieCtrl'
      })
      .when('/tarifs', {
  	  	title: 'Tarifs',
        templateUrl: 'views/tarifs.html',
        controller: 'TarifCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
