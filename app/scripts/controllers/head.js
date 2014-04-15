/*global _:false */
/*global $:false */
'use strict';

angular.module('aVotreImage')
.controller('HeadCtrl', function ($scope,$rootScope,$route) {
	$rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
	    //Change page title, based on Route information
	    $rootScope.title = $route.current.title;
	  });
});
