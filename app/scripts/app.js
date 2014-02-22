'use strict';

angular.module('aVotreImage', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angular-flexslider'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/concept.html',
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
      .when('/galerie', {
        templateUrl: 'views/galerie.html',
        controller: 'GalerieCtrl'
      })
      .when('/tarifs', {
        templateUrl: 'views/tarifs.html',
        controller: 'TarifCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
