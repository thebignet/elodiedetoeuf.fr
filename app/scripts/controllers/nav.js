/*global _:false */
/*global $:false */
'use strict';

angular.module('aVotreImage')
.controller('NavCtrl', function ($scope,$location,$rootScope) {
	$scope.menus = [
		{'href':'/', 'text':'Concept'},
		{'href':'/galerie','text':'Galerie', 'menus':[
			{'href':'/mariage', 'text':'Mariage'},
			{'href':'/bapteme', 'text':'Bapteme'},
			{'href':'/babyshower', 'text':'Baby shower'}
		]},
		{'href':'/illustratrice', 'text':'L\'illustratrice'},
		{'href':'/tarifs', 'text':'Tarifs'},
		{'href':'/contact', 'text':'Contact'}
	];
	$scope.goTo = function(href){
		$location.path(href);
	};
	$rootScope.$on('$locationChangeStart', function () {
		setActive($location.path());
	});
	function setActive(route){
		_.each($scope.menus,function(item){
			item.active=(item.href===route);
		});
	}
	$scope.activate = function(){
		$('.dropdown-toggle').dropdown();
	};
});
