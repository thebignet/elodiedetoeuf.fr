/*global _:false */
/*global $:false */
'use strict';

angular.module('aVotreImage')
.controller('NavCtrl', function ($scope,$location,$rootScope,Piwik) {
	$scope.menus = [
		{'href':'/', 'text':'Presentation'},
		{'href':'/galerie','text':'Galerie', 'menus':[
			{'href':'/mariage', 'text':'Mariage'},
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
		//Création de la fonction dropdown sur le menu (gros hack)
		$('.dropdown-toggle').dropdown();
		var location = $location.path();
		if(location !== ''){
			Piwik.setDocumentTitle($location.path());
			Piwik.trackPageView();
		}
	});
	function setActive(route){
		_.each($scope.menus,function(item){
			item.active=(item.href===route);
		});
	}
});
