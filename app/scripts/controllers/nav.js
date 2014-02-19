/*global _:false */
'use strict';

angular.module('aVotreImage')
.controller('NavCtrl', function ($scope,$location,$rootScope) {
	$scope.menus = [
		{'link':'/', 'titre':'Accueil'},
		{'link':'/auteur', 'titre':'Auteur'},
		{'link':'/galerie', 'titre':'Galerie'},
		{'link':'/tarifs', 'titre':'Tarifs'},
		{'link':'/contact', 'titre':'Contact'}
	];
	$scope.goTo = function(link){
		$location.path(link);
	};
	$rootScope.$on('$locationChangeStart', function () {
		setActive($location.path());
	});
	function setActive(route){
		_.each($scope.menus,function(item){
			item.active=(item.link===route);
		});
	}
});
