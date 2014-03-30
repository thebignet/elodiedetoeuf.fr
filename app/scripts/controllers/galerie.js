'use strict';

angular.module('aVotreImage')
.controller('GalerieCtrl', function ($scope) {
  $scope.slidesJeanElodie = [
    'jeanElodie1.png',
    'jeanElodie2.png',
    'jeanElodie3.png',
    'jeanElodie4.jpg'
  ];
  $scope.slidesKevinNoemie = [
    'kevinNoemie1.jpg',
    'kevinNoemie2.jpg',
    'kevinNoemie3.jpg',
    'kevinNoemie4.jpg',
    'kevinNoemie5.jpg'
  ];
  $scope.slidesBabyShower = [
    'babyShower.png'
  ];
});
