'use strict';

angular.module('testYeomanApp')
.controller('NavCtrl', function ($scope,$location) {
	$scope.menus = [
		{'link':'', 'titre':'Accueil'},
		{'link':'auteur', 'titre':'Auteur'},
		{'link':'portfolio', 'titre':'Portfolio'},
		{'link':'tarifs', 'titre':'Tarifs'},
		{'link':'contact', 'titre':'Contact'}
	];
	$scope.goTo = function(link){
		$location.path('/'+link);
	};
});
