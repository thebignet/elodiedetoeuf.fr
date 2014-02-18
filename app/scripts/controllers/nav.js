/*global _:false */
'use strict';

angular.module('testYeomanApp')
.controller('NavCtrl', function ($scope,$location,$rootScope) {
	$scope.menus = [
		{'link':'/', 'titre':'Accueil'},
		{'link':'/auteur', 'titre':'Auteur'},
		{'link':'/portfolio', 'titre':'Portfolio'},
		{'link':'/tarifs', 'titre':'Tarifs'},
		{'link':'/contact', 'titre':'Contact'}
	];
	$scope.goTo = function(link){
		$location.path(link);
	};
	$rootScope.$on('$locationChangeStart', function (event, next, current) {
		setActive($location.path());
		console.log('change route '+$location.path());
		console.log(event);
		console.log(next);
		console.log(current);
	});
	function setActive(route){
		_.each($scope.menus,function(item){
			item.active=(item.link===route);
		});
	}
});
