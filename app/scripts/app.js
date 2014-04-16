'use strict';

var app = angular.module('aVotreImage', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angular-flexslider',
  'piwik',
  'pascalprecht.translate'
]);
app.config(['$locationProvider','$routeProvider',function ($locationProvider,$routeProvider) {
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
app.config(function($translateProvider) {
    // Our translations will go in here
	$translateProvider.translations('en', {
	    HEADLINE: 'Hello there, This is my awesome app!',
	    INTRO_TEXT: 'And it has i18n support!'
	  });
});