'use strict';

angular.module('aVotreImage')
.controller('TarifCtrl', function ($scope) {
	$scope.tarifs = [
		{nom:'Coup de crayon',nb:1,prix:199},
		{nom:'Coup de pinceau',nb:2,prix:299},
		{nom:'Coup de foudre',nb:3,prix:399}
	];
});
