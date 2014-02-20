/*global _:false */
'use strict';

angular.module('aVotreImage')
.controller('NavCtrl', function ($scope,$location,$rootScope) {
	$scope.menus = [
		{'link':'/', 'titre':'Concept'},
		{'link':'/galerie', 'titre':'Galerie'},
		{'link':'/illustratrice', 'titre':'L\'illustratrice'},
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
